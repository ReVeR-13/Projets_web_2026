import { Module } from '@nestjs/common';
import { VaccinService } from './vaccin.service';
import { VaccinController } from './vaccin.controller';

@Module({})
export class VaccinModule {
    imports: []
    controllers: [VaccinController]
    providers: [VaccinService]
}
