import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentDto } from 'src/models/dto/establishment.dto';

@Controller('estabelecimento')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Get('/:tipo')
  async getByType(@Param('tipo') tipo: string): Promise<EstablishmentDto[]> {
    return this.establishmentService.pegarPorTipo(tipo);
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<EstablishmentDto> {
    return this.establishmentService.pegarPorId(id); 
  }
}
