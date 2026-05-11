import { Injectable, Logger } from '@nestjs/common';
import {
    CreationFailException,
    DeleteFailException,
    ExistException,
    NotFoundException,
    NullException,
    ParamInvalide,
    TokenGenerationException,
    TokenNotFoundException,
    UpdateFailException,
    UserNotFoundException
} from 'home';
import { isNil } from 'lodash';
import { SignInPayload } from 'api/security/data/Payload/sign-in.payload';
import { CredentialRepository } from 'api/security/data/repository/credential.repository';
import { CredentialEntity } from 'api/security/data/entity/credential.entity'
import { comparePassword, encryptPassword } from 'api/security/utils/password.decoder';
import { Credential } from '../data/model/Credential';
import { SignUpDto } from '../data/dto/sign-up.dto';
import { TokenEntity } from '../data/entity/token.entity';
import { TokenService } from './token.service';
import { CredentialDto } from '../data/dto/credential.dto';
import { RefreshTokenPayload } from '../data/Payload/refresh-token.payload';
import { UpdateDto } from '../data/dto/update.dto';
import { RefreshTokenDto } from '../data/dto/refresh-token.dto';

@Injectable()
export class CredentialService {

    private readonly logger = new Logger(CredentialService.name);

    constructor(
        private readonly repo: CredentialRepository,
        private readonly tokenService: TokenService,
    ) { }


    public async signUp(payload: SignUpDto): Promise<Partial<CredentialDto> | null> {

        try {
            //------------------------------------------------------------
            //  VERIFICATION DES DONNÈES
            //------------------------------------------------------------

            if (isNil(payload)) {
                throw new ParamInvalide();
            }

            const mail: CredentialEntity | null = await this.repo.findByEmail(payload.email);
            const username: CredentialEntity | null = await this.repo.findByUsername(payload.username);

            if (!isNil(mail) || !isNil(username)) {
                throw new ExistException();
            }

            //------------------------------------------------------------
            //  CREATION DU CREDENTIAL
            //------------------------------------------------------------

            const new_element: Credential = await Credential.create
                (
                    payload.username,
                    payload.password,
                    payload.email,
                    payload.description
                );

            if (isNil(new_element)) {
                throw new CreationFailException();
            }

            const credential: CredentialEntity = await this.repo.add(new_element.asCredentialEntity()) as CredentialEntity;
            await this.tokenService.createTokens(new_element.asCredentialEntity()) as TokenEntity;

            //------------------------------------------------------------
            //  RETOUR DES DONNÈES
            //------------------------------------------------------------
            return this.details(credential.id);

        } catch (ex) {

            this.logger.error(ex.message);
            throw new TokenGenerationException();

        }

    }

    public async signIn(payload: SignInPayload,isAdmin:boolean): Promise<Partial<CredentialDto> | null> {

        //------------------------------------------------------------
        //  VERIFICATION DES DONNÈES
        //------------------------------------------------------------

        if (isNil(payload)) {
            throw new NullException();
        }

        let retval: CredentialEntity | null = await this.repo.findByUsername(payload.username);
        if (isNil(retval)) {
            throw new UserNotFoundException();
        }

        if (! await comparePassword(payload.password, retval.password)) {
            throw new ParamInvalide();
        }

        //------------------------------------------------------------
        //  MISE A JOUR DU TOKEN
        //------------------------------------------------------------

        let newToken: Partial<TokenEntity> | null = null;

        const token: TokenEntity | null = await this.tokenService.getToken(retval);
        if (isNil(token)) {
            throw new TokenNotFoundException();
        }

        const refresh: RefreshTokenDto = {
            id: await this.tokenService.getRefreshToken(retval) as string
        }

        if (isNil(refresh.id)) {
            newToken = await this.tokenService.createTokens(retval);
        } else {
            newToken = await this.refreshToken(refresh);
        }

        //------------------------------------------------------------
        //  CONNEXION DE L'UTILISATEUR 
        //------------------------------------------------------------

        // EN ADMINISTRATEUR --

        //------------------------------------------------------------
        //  RETOUR DES DETAILS 
        //------------------------------------------------------------

        return await this.details(retval.id);

    }

    public async details(id: string): Promise<Partial<CredentialDto> | null> {

        const credential: CredentialEntity | null = await this.repo.findById(id);
        if (isNil(credential)) {
            throw new NotFoundException();
        }

        const token: TokenEntity | null = await this.tokenService.getToken(credential as CredentialEntity)

        return {
            id: credential.id,
            created: credential.created,
            updated: credential.updated,

            username: credential.username,
            email: credential.mail,
            description: credential.description,

            token: token?.token,
            refreshToken: token?.refreshToken,
        }
    }

    public async update(id: string, data: UpdateDto): Promise<Partial<CredentialDto> | null> {

        try {

            if (isNil(id) || isNil(data)) {
                throw new NullException();
            }

            let credentialEntiy: CredentialEntity | null = await this.repo.findById(id);

            this.logger.log(data);
            if (isNil(credentialEntiy) || isNil(data)) {
                throw new NotFoundException();
            }

            data.password = data.password ? await encryptPassword(data.password) : credentialEntiy.password;

            await this.repo.update(id, data)

            return await this.details(id);
        } catch (ex) {
            this.logger.error(ex.message);
            throw new UpdateFailException();
        }

    }

    public async delete(id: string): Promise<number> {
        try {

            if (isNil(id)) {
                throw new ParamInvalide();
            }

            const credential: CredentialEntity | null = await this.repo.findById(id);
            if (isNil(credential)) {
                throw new UserNotFoundException();
            }

            const token: TokenEntity | null = await this.tokenService.getToken(credential);
            if (!isNil(token)) {
                this.tokenService.deleteToken(credential);
            }

            return await this.repo.delete(credential.id);

        } catch (ex) {
            this.logger.error(ex.message);
            throw new DeleteFailException();
        }

    }

    public async refreshToken(payload: RefreshTokenDto): Promise<Partial<TokenEntity> | null> {
        if(isNil(payload)){
            throw new ParamInvalide();
        }

        const id : RefreshTokenPayload ={
            refresh: payload.id
        }
        return await this.tokenService.refreshToken(id);
    }
}
