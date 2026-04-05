import { Module } from '@nestjs/common';
import { TypeDemandeService } from './type-demande/type-demande.service';
import { DemandeController } from './demande.controller';
import { DemandeService } from './demande.service';
import { TypeDemandeController } from './type-demande/type-demande.controller';
import { TypeDemandeModule } from './type-demande/type-demande.module';
import { StatutDemandeService } from './statut-demande/statut-demande.service';
import { StatutDemandeController } from './statut-demande/statut-demande.controller';
import { StatutDemandeModule } from './statut-demande/statut-demande.module';

@Module({
  controllers: [DemandeController, StatutDemandeController],
  providers: [DemandeService, StatutDemandeService],
  imports: [TypeDemandeModule,DemandeModule, StatutDemandeModule],
})
export class DemandeModule {}
