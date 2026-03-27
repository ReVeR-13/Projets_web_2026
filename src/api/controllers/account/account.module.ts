import { Module } from '@nestjs/common';
import {AccountController,AccountService} from './index'

@Module({
    controllers: [AccountController],
    providers: [AccountService],
})
export class AccountModule { }
