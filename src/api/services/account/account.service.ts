import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  GetSignIn(nom:string): string {
    return `Bonjour ${nom}`;
  }
}
