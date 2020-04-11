import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentDto } from 'src/models/dto/establishment.dto';
import { TypeDto } from 'src/models/dto/type.dto';

@Controller('estabelecimento')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Get('/tipos')
  async getAllTypes(): Promise<TypeDto[]> {
    return this.establishmentService.pegarTodosOstipos();
  }

  @Get('/:tipo')
  async getByType(@Param('tipo') tipo: string): Promise<EstablishmentDto[]> {
    return this.establishmentService.pegarPorTipo(tipo);
  }

  @Get('id/:id')
  async getById(@Param('id') id: string): Promise<EstablishmentDto> {
    return this.establishmentService.pegarPorId(id); 
  }

  @Post('add/tipo')
  async addTipos(@Body() tipo: TypeDto): Promise<TypeDto> {
    return this.establishmentService.adicionartipos(tipo); 
  }
}
