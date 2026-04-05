import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import {StatutDemandeService} from './statut-demande.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger';
import { StatutDemande } from './StatutDemande';


@Controller('statut-demande')
@ApiTags('Statut Demande')
export class StatutDemandeController {

    constructor(private readonly StatutDemandeService: StatutDemandeService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): StatutDemande[] {
        return this.StatutDemandeService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): StatutDemande | string {
        return this.StatutDemandeService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() statut: StatutDemande): StatutDemande | string {
        return this.StatutDemandeService.Creer(statut);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() statut: StatutDemande): StatutDemande | string {
        return this.StatutDemandeService.Modifier(id, statut);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.StatutDemandeService.Supprimer(id);
    }
}
