import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps:true
})

export class FormTemplateMarket {

    @Prop()
    title: string;
    
    @Prop([Object])
    fields: Object[];

}

export const AwesomeformSchema = SchemaFactory.createForClass(FormTemplateMarket)