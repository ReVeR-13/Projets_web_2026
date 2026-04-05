import { Body, Controller,Delete,Get, HttpCode, Param, Patch, Post, } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ApiOperation,ApiTags } from '@nestjs/swagger';
import { SwaggerGeneralController } from 'app.swagger'; 
import type { Contact } from './Contact';



@Controller('contact')
export class ContactController {
    constructor(private readonly Contactservice:ContactService){}

    @Get()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerAll)
    GetAll():Contact[]{
        return this.Contactservice.GetAll();
    }

    @Get('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerUn)
    GetOne(@Param('id')id:string):Contact | string{
        return this.Contactservice.GetOne(id);
    }

    @Post()
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerCreer)
    Create(@Body()contact:Contact):Contact | string{
        return this.Contactservice.Create(contact);
    }

    @Patch('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerModifier)
    Modifier(@Param('id')id:string,@Body() contact:| Contact):Contact| string{
        return this.Contactservice.Modifier(id,contact);
    }

    @Delete('/:id')
    @HttpCode(200)
    @ApiOperation(SwaggerGeneralController.SwaggerSupprimer)
    Delete(@Param('id')id:string):string{
        return this.Contactservice.Supprimer(id);
    }
}
