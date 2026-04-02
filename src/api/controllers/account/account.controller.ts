import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from '@api/index';

@Controller('account')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Get('sign-in/:nom')
  public Signin(@Param('nom') nom:string): string {
    return this.AccountService.GetSignIn(nom);
  }
}
