import { Body, Controller,Delete,Get,HttpCode, Param, Patch, Post } from '@nestjs/common';
import { DemandeService } from './demande.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger'; 
import { Demande } from './Demande';

@Controller('demande')
@ApiTags('Demande')
export class DemandeController {

    constructor(private readonly DemandeService: DemandeService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): Demande[] {
        return this.DemandeService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetOne(@Param('id') id: string): Demande | string {
        return this.DemandeService.FindOne(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() demande: Demande): Demande | string {
        return this.DemandeService.Create(demande);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() demande: | Demande): Demande | string {
        return this.DemandeService.Modifier(id, demande);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.DemandeService.Supprimer(id);
    }
}
