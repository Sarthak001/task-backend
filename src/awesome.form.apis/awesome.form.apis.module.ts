import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AwesomeFormApisController } from './awesome.form.apis.controller';
import { AwesomeFormApisService } from './awesome.form.apis.service';
import { AwesomeformSchema } from './schemas/awesome.form.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'FormTemplateMarket',schema: AwesomeformSchema}])],
  controllers: [AwesomeFormApisController],
  providers: [AwesomeFormApisService]
})
export class AwesomeFormApisModule {}
