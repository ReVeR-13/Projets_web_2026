import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { StatutAnimalService } from './statut-animal.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger';
import { StatutAnimal } from './StatutAnimal';

@Controller('statut-animal')
@ApiTags('Statut Animal')
export class StatutAnimalController {

    constructor(private readonly StatutAnimalService: StatutAnimalService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): StatutAnimal[] {
        return this.StatutAnimalService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): StatutAnimal | string {
        return this.StatutAnimalService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() type: StatutAnimal): StatutAnimal | string {
        return this.StatutAnimalService.Creer(type);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() type: StatutAnimal): StatutAnimal | string {
        return this.StatutAnimalService.Modifier(id, type);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.StatutAnimalService.Supprimer(id);
    }
}
