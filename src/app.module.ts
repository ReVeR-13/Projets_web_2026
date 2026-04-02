import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AccountController} from '@controller/account';
import {AccountService} from '@service/account';
import { ContactController, ContactService } from 'api/contact';



@Module({
  imports: [],
  controllers: [AppController, AccountController,ContactController],
  providers: [AppService, AccountService,ContactService],
})
export class AppModule {}
