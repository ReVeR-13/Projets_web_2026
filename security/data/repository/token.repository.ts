import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TokenEntity } from "../entity/token.entity";
import { Repository } from "typeorm";
import { isNil } from "lodash";
import { ExistException, NullException } from "home/app.exception";
import { Token } from "../model/Token";
import { CredentialEntity } from "home";
import { RefreshTokenPayload } from "../Payload/refresh-token.payload";

@Injectable()
export class TokenRepository {

    constructor(
        @InjectRepository(TokenEntity)
        private readonly repo: Repository<TokenEntity>
    ) { }

    //------------------------------------------------------------
    //  SEARCH
    //------------------------------------------------------------

    public async findAll(): Promise<TokenEntity[]> {
        const animals: TokenEntity[] = await this.repo.find();
        return animals;
    }

    public async findById(id?: string): Promise<TokenEntity | null> {
        if (isNil(id)) {
            throw new NullException();
        }
        return await this.repo.findOne({ where: { token_id: id } })
    }

    public async findByCredential(credential?: CredentialEntity): Promise<TokenEntity | null> {
        if (isNil(credential)) {
            throw new NullException();
        }
        return await this.repo.findOne({ where: { credential: credential } })
    }

    public async findByRefreshToken(refresh?: string): Promise<TokenEntity | null> {
        if (isNil(refresh)) {
            throw new NullException();
        }
        return await this.repo.findOne({ where: { refreshToken: refresh } })
    }

    //------------------------------------------------------------
    //  CREATE
    //------------------------------------------------------------

    public async add(element: Partial<TokenEntity>): Promise<TokenEntity | null> {

        const verif: TokenEntity | null = await this.findById(element.token_id);

        if (!isNil(verif)) {
            throw new ExistException();
        }

        if (await this.findByCredential(element.credential) !== null ) {
            throw new ExistException();
        }

        const new_animal: TokenEntity = this.repo.create(element)
        this.repo.save(new_animal);
        return new_animal;
    }

    //------------------------------------------------------------
    //  UPDATE
    //------------------------------------------------------------

    public async update(id: string, element: Partial<TokenEntity>): Promise<TokenEntity | null> {
        if (this.findById(element.token_id) === null) {
            throw new NotFoundException();
        }
        this.repo.update(id, element)
        return await this.findById(id);
    }

    //------------------------------------------------------------
    //  DELETE
    //------------------------------------------------------------

    public async delete(id: string): Promise<number> {
        let ret: number = 0;
        if (await this.findById(id) !== null) {
            this.repo.delete(id);
            ret = 1;
        }
        return ret;
    }

}