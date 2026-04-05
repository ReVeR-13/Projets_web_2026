import { Module } from '@nestjs/common';
import { TypeDemandeService } from './type-demande.service';
import { TypeDemandeController } from './type-demande.controller';

@Module({
  controllers: [TypeDemandeController],
  providers: [TypeDemandeService],
  imports: []
})
export class TypeDemandeModule {}
