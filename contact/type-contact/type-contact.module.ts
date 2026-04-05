import { Module } from '@nestjs/common';
import { TypeContactController, TypeContactService } from 'index';

@Module({})
export class TypeContactModule {
    imports: []
    controllers: [TypeContactController]
    providers: [TypeContactService]
}
