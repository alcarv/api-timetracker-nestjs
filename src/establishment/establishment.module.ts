import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.contoller'

@Module({
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
  exports: [EstablishmentService]
})
export class EstablishmentModule {}