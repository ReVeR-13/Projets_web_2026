import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TypeDemande } from './TypeDemande';
import { TypeDemandeService } from './type-demande.service';
import { SwaggerGeneralController } from 'app.swagger';

@Controller('type-demande')
@ApiTags('Type Demande')
export class TypeDemandeController {

    constructor(private readonly TypeDemandeService: TypeDemandeService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): TypeDemande[] {
        return this.TypeDemandeService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): TypeDemande | string {
        return this.TypeDemandeService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() type: TypeDemande): TypeDemande | string {
        return this.TypeDemandeService.Creer(type);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() type: TypeDemande): TypeDemande | string {
        return this.TypeDemandeService.Modifier(id, type);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.TypeDemandeService.Supprimer(id);
    }
}
