import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.contoller'
import { EstablishmentSchema } from '../models/schemas/establishment.schema'
import { TypeSchema } from 'src/models/schemas/types.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Establishment', schema: EstablishmentSchema},
      {name: 'Type', schema: TypeSchema}
    ])
  ],
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
  exports: [EstablishmentService]
})
// autoDeploy
export class EstablishmentModule {}