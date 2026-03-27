import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    
    GetSignIn():string{
        return "Sign In"
    }
}
