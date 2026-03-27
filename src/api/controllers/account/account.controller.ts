import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service'
import { th } from 'date-fns/locale/th';

@Controller('account')
export class AccountController {

    constructor(private readonly AccountService: AccountService){}

    @Get('sign-in')
    public Signin() :string {
        return this.AccountService.GetSignIn();
    }

}


