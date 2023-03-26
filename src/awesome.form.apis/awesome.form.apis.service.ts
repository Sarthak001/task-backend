import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { FormTemplateMarket } from './schemas/awesome.form.schema';

@Injectable()
export class AwesomeFormApisService {
    constructor(
        @InjectModel(FormTemplateMarket.name)
        private awesomeFormModel:mongoose.Model<FormTemplateMarket>
    ){}

    async findAll():Promise<FormTemplateMarket[]>{
        return await this.awesomeFormModel.find()
        
    }

    async create(form: FormTemplateMarket): Promise<FormTemplateMarket>{
        const res = await this.awesomeFormModel.create(form)
        return res
    }

    async findById(id: string): Promise<FormTemplateMarket>{
        const res = await this.awesomeFormModel.findById(id)
        if(!res){
            throw new NotFoundException("form not found")
        }
        return res
    }

    async updateById(id: string, form:FormTemplateMarket ): Promise<FormTemplateMarket>{
        return await this.awesomeFormModel.findByIdAndUpdate(id,form,{
            new:true,
            runValidators:true,
        });
    }
}
