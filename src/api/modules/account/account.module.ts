import { Module } from '@nestjs/common';
import { AccountController, AccountService } from '@api/api';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
