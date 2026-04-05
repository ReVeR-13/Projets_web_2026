import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import {VaccinService} from './vaccin.service'
import { SwaggerGeneralController } from 'app.swagger';
import { ApiOperation } from '@nestjs/swagger';
import { Vaccin } from './Vaccins';

@Controller('vaccin')
export class VaccinController {

    constructor(private readonly VaccinService: VaccinService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): Vaccin[] {
        return this.VaccinService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetOne(@Param('id') id: string): Vaccin | string {
        return this.VaccinService.FindOne(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() vacc: Vaccin): Vaccin | string {
        return this.VaccinService.Create(vacc);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() vacc: | Vaccin): Vaccin | string {
        return this.VaccinService.Modifier(id, vacc);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.VaccinService.Supprimer(id);
    }
}
