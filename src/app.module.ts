import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AccountController,AccountService} from './Index';

@Module({
  imports: [],
  controllers: [AppController,AccountController],
  providers: [AppService,AccountService],
})
export class AppModule {}
