import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put } from '@nestjs/common';
import { AnimalService } from './animal.service'
import { SwaggerGeneralController } from 'app.swagger';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Animal } from './Animal';
import { Vaccin } from 'api/vaccin';
import { Compatibilite } from 'api/compatibilite/Compatibilite';

@Controller('animal')
export class AnimalController {

    constructor(private readonly AnimalService: AnimalService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): Animal[] {
        return this.AnimalService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): Animal | string {
        return this.AnimalService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() animal: Animal): Animal | string {
        return this.AnimalService.Creer(animal);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() animal: Animal): Animal | string {
        return this.AnimalService.Modifier(id, animal);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.AnimalService.Supprimer(id);
    }

    @Get('/:vaccin')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAllVaccin(@Body() animal: Animal): Vaccin[] {
        return this.AnimalService.AllVaccin(animal);
    }
    @Put('/:vaccin')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAddVaccin)
    AddVaccin(@Param('id') id: string, @Body() vaccin: Vaccin): Animal | string {
        return this.AnimalService.AddVaccin(vaccin, id);
    }
    @Delete('/:vaccin')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAddVaccin)
    SupprimerVaccin(@Param('idAnimal') idAnimal: string, @Body() vaccin: Vaccin): Animal | string {
        return this.AnimalService.SupprimerVaccin(idAnimal, vaccin);
    }

    @Get('/:vaccin-un')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUnVaccin(@Param('idAnimal') idAnimal: string, @Body() vacc: Vaccin): Vaccin | string {
        return this.AnimalService.FindUnVaccin(idAnimal, vacc);
    }

    @Get('/:compatibilite')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAllCompatibilite(@Body() comp: Animal): Compatibilite[] {
        return this.AnimalService.AllCompatibilite(comp);
    }
    @Put('/:compatibilite')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAddVaccin)
    AddCompatibilite(@Param('id') id: string, @Body() comp: Compatibilite): Animal | string {
        return this.AnimalService.AddCompatibilite(comp, id);
    }
    @Delete('/:compatibilite')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAddVaccin)
    SupprimerCompatibilite(@Param('idAnimal') idAnimal: string, @Body() comp: Compatibilite): Animal | string {
        return this.AnimalService.SupprimerCompatibilite(idAnimal, comp);
    }

    @Get('/:compatibilite-un')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUnCompatibilite(@Param('idAnimal') idAnimal: string, @Body() comp: Compatibilite): Compatibilite | string {
        return this.AnimalService.FindUnCompatibilite(idAnimal, comp);
    }
}
