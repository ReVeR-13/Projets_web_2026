import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from '@controller/account';
import { AccountService } from '@service/account';
import {
  AnimalController,
  AnimalService,
  CompatibiliteController,
  CompatibiliteService,
  ContactController,
  ContactService,
  TypeContactController,
  TypeContactService,
  VaccinController,
  VaccinService
} from '@api/contact';
import { DemandeModule } from './api/demande';
import { AnimalModule } from './api/animal/animal.module';
import { CompatibiliteModule } from './api/compatibilite/compatibilite.module';
import { VaccinModule } from './api/vaccin/vaccin.module';
import { SortieController,SortieService,SortieModule} from './api/sortie';
import { EntreeController,EntreeService ,EntreeModule} from './api/entree';
import { AdoptionController,AdoptionService,AdoptionModule } from './api/adoption';
import { TypeOrmModule } from '@nestjs/typeorm';
import {configManager} from './api/common/config/config.manager';




@Module({
  imports: [TypeOrmModule.forRoot(configManager.getTypeOrmConfig()),
    DemandeModule, 
    AnimalModule, 
    CompatibiliteModule, 
    VaccinModule, 
    SortieModule, 
    EntreeModule, 
    AdoptionModule],

  controllers: [AppController,
     AccountController, 
     ContactController, 
     TypeContactController, 
     CompatibiliteController, 
     VaccinController, 
     AnimalController, 
     SortieController, 
     EntreeController, AdoptionController],
     
  providers: [AppService, 
    AccountService, 
    ContactService, 
    TypeContactService, 
    CompatibiliteService, 
    VaccinService, 
    AnimalService, 
    SortieService, 
    EntreeService, AdoptionService],
})
export class AppModule { }
