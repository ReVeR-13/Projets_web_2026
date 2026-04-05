import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CompatibiliteService} from './compatibilite.service'
import {Compatibilite} from './Compatibilite';
import { ApiOperation } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger';

@Controller('compatibilite')
export class CompatibiliteController {

    constructor(private readonly CompatibiliteService: CompatibiliteService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): Compatibilite[] {
        return this.CompatibiliteService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetOne(@Param('id') id: string): Compatibilite | string {
        return this.CompatibiliteService.FindOne(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() cpm: Compatibilite): Compatibilite | string {
        return this.CompatibiliteService.Create(cpm);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() cpm: | Compatibilite): Compatibilite | string {
        return this.CompatibiliteService.Modifier(id, cpm);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.CompatibiliteService.Supprimer(id);
    }
}
