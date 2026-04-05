import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import {StatutAdoptionService} from './statut-adoption.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger';
import { StatutAdoption } from './StatutAdoption';

@Controller('statut-adoption')
@ApiTags('Statut Adoption')
export class StatutAdoptionController {

    constructor(private readonly StatutAdoptionService: StatutAdoptionService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): StatutAdoption[] {
        return this.StatutAdoptionService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): StatutAdoption | string {
        return this.StatutAdoptionService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() type: StatutAdoption): StatutAdoption | string {
        return this.StatutAdoptionService.Creer(type);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() type: StatutAdoption): StatutAdoption | string {
        return this.StatutAdoptionService.Modifier(id, type);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.StatutAdoptionService.Supprimer(id);
    }
}
