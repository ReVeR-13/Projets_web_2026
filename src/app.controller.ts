import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Sign, sign } from 'crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getStart(): string {
    return this.appService.getStart();
  }

}

