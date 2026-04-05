import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { SortieService } from './sortie.service';
import { Sortie } from './Sortie';
import { ApiOperation } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger';

@Controller('sortie')
export class SortieController {

    constructor(private readonly SortieService: SortieService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): Sortie[] {
        return this.SortieService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): Sortie | string {
        return this.SortieService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() sortie: Sortie): Sortie | string {
        return this.SortieService.Creer(sortie);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() sortie: Sortie): Sortie | string {
        return this.SortieService.Modifier(id, sortie);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.SortieService.Supprimer(id);
    }
}
