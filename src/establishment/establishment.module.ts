import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.contoller'
import { EstablishmentSchema } from '../models/schemas/establishment.schema'
@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Establishment', schema: EstablishmentSchema}])
  ],
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
  exports: [EstablishmentService]
})
export class EstablishmentModule {}