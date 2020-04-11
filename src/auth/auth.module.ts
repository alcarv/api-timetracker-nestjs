import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumerSchema } from '../models/schemas/consumer.schema';
import { EstablishmentSchema } from '../models/schemas/establishment.schema';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
  imports: [MongooseModule.forFeature([
    { name: 'Consumer', schema: ConsumerSchema },
    { name: 'Establishment', schema: EstablishmentSchema}
  ])]
})
export class AuthModule {}