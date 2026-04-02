import { Controller,Get, Param, Post, } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ApiOperation } from '@nestjs/swagger';
import { SwaggerContactController } from 'app.swagger'; 

@Controller('contact')
export class ContactController {
    constructor(private readonly Contactservice:ContactService){}

    @ApiOperation(SwaggerContactController)
    @Get()
    GetAll(){
        return this.Contactservice.GetAll();
    }

    @Get('/:id')
    GetOne(@Param('id')id:string){
        this.Contactservice.GetOne(id);
    }

    @Post()
    Create(){
        return this.Contactservice.Create('a');
    }
}
