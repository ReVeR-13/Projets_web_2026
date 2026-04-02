import { Module } from '@nestjs/common';
import { ContactController } from './index';
import { ContactService } from './index';

@Module({
  imports:[],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
