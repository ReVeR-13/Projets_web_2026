import { Module } from '@nestjs/common';
import { ContactController } from './index';
import { ContactService } from './index';
import { TypeContactService } from './type-contact/type-contact.service';
import { TypeContactController } from './type-contact/type-contact.controller';
import { TypeContactModule } from './type-contact/type-contact.module';

@Module({
  imports:[TypeContactModule],
  controllers: [ContactController, TypeContactController],
  providers: [ContactService, TypeContactService]
})
export class ContactModule {}
