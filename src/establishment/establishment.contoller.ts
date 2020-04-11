import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { Establishment } from '../models/establishment.schema'

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  async create(@Body() establishment: Establishment): Promise<Establishment> {
    return this.establishmentService.create(establishment);
  }

  @Get(':getArrTipo')
  async getByType(@Param('arrTipo') arrTipo: []) : Promise<Establishment> {
    return this.establishmentService.getByType(arrTipo)
  }
}
