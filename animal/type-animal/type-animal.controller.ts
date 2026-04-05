import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TypeAnimalService } from './type-animal.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger';
import { TypeAnimal } from './TypeAnimal';

@Controller('type-animal')
@ApiTags('Type Animal')
export class TypeAnimalController {

    constructor(private readonly TypeAnimalService: TypeAnimalService) { }

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll(): TypeAnimal[] {
        return this.TypeAnimalService.FindAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetUn(@Param('id') id: string): TypeAnimal | string {
        return this.TypeAnimalService.FindUn(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body() type: TypeAnimal): TypeAnimal | string {
        return this.TypeAnimalService.Creer(type);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id') id: string, @Body() type: TypeAnimal): TypeAnimal | string {
        return this.TypeAnimalService.Modifier(id, type);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id') id: string): string {
        return this.TypeAnimalService.Supprimer(id);
    }
}
