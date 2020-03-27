import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumerSchema } from './models/consumer.schema';

@Module({
  controllers: [ConsumerController],
  providers: [ConsumerService],
  exports: [ConsumerService],
  imports: [MongooseModule.forFeature([{ name: 'Consumer', schema: ConsumerSchema }])]
})
export class ConsumerModule {}

