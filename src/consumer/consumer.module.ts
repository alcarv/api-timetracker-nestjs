import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstablishmentSchema } from 'src/models/schemas/establishment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Establishment', schema: EstablishmentSchema}
    ])
  ],
  controllers: [ConsumerController],
  providers: [ConsumerService],
  exports: [ConsumerService]
})
export class ConsumerModule {}

