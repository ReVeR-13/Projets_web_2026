import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { AbriService } from './abri.service'
import { SwaggerGeneralController } from 'app.swagger';
import { ApiOperation } from '@nestjs/swagger';
import { Abri } from './Abri';

@Controller('abri')
export class AbriController {

    constructor(private readonly AbriService: AbriService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): Abri[] {
        return this.AbriService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerId)
    GetById(@Param('id') id: string): Abri | string {
        return this.AbriService.FindById(id);
    }

    @Get('/:libele')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerNom)
    GetByLibele(@Param('libele') libele: string): Abri | boolean {
        return this.AbriService.FindByLibele(libele);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() abri: Abri): Abri | string {
        return this.AbriService.Create(abri);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() abri: | Abri): Abri | string {
        return this.AbriService.Modifier(id, abri);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.AbriService.Supprimer(id);
    }
}
