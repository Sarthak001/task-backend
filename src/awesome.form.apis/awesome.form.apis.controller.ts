import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AwesomeFormApisService } from './awesome.form.apis.service';
import { CreateFormDto } from './dto/create.form.dto';
import { UpdateFormDto } from './dto/update.form.dto';
import { FormTemplateMarket } from './schemas/awesome.form.schema';

@Controller('api/v1')
export class AwesomeFormApisController {
    constructor(private awesomeFormService: AwesomeFormApisService){}

    @Get('/forms')
    async getAllForms():Promise <FormTemplateMarket[]>{
        return this.awesomeFormService.findAll()
    }

    @Post('form')
    async creatform(
        @Body()
        form : CreateFormDto
    ):Promise<FormTemplateMarket>{
        return this.awesomeFormService.create(form)
    }

    @Get('form/:id')
    async getForm(
        @Param('id')
        id:string
    ):Promise <FormTemplateMarket>{
        return this.awesomeFormService.findById(id)
    }

    @Put('update/:id')
    async update(
        @Param('id')
        id:string,
        @Body()
        form : UpdateFormDto
    ):Promise<FormTemplateMarket>{
        return this.awesomeFormService.updateById(id,form)
    }

}
