import { Module } from '@nestjs/common';
import { StatutAdoptionController } from './statut-adoption/statut-adoption.controller';
import { StatutAdoptionService } from './statut-adoption/statut-adoption.service';
import { StatutAdoptionModule } from './statut-adoption/statut-adoption.module';

@Module({
  controllers: [StatutAdoptionController],
  providers: [StatutAdoptionService],
  imports: [StatutAdoptionModule]
})
export class AdoptionModule {}
