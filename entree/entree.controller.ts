import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import {EntreeService} from './entree.service'
import { Entree } from './Entree';
import { ApiOperation } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger';

@Controller('entree')
export class EntreeController {

    constructor(private readonly EntreeService: EntreeService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): Entree[] {
        return this.EntreeService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): Entree | string {
        return this.EntreeService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() entree: Entree): Entree | string {
        return this.EntreeService.Creer(entree);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() entree: Entree): Entree | string {
        return this.EntreeService.Modifier(id, entree);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.EntreeService.Supprimer(id);
    }
}
