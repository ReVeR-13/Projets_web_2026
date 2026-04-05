import { Module } from '@nestjs/common';
import { TypeAnimalService } from './type-animal/type-animal.service';
import { TypeAnimalController } from './type-animal/type-animal.controller';
import { TypeAnimalModule } from './type-animal/type-animal.module';
import { StatutAnimalController } from './statut-animal/statut-animal.controller';
import { StatutAnimalService } from './statut-animal/statut-animal.service';
import { StatutAnimalModule } from './statut-animal/statut-animal.module';
import { AbriController } from './abri/abri.controller';
import { AbriService } from './abri/abri.service';
import { AbriModule } from './abri/abri.module';
import { VaccinService } from 'api/vaccin/vaccin.service';

@Module({
  providers: [TypeAnimalService, StatutAnimalService, AbriService,VaccinService],
  controllers: [TypeAnimalController, StatutAnimalController, AbriController],
  imports: [TypeAnimalModule, StatutAnimalModule, AbriModule]
})
export class AnimalModule {}
