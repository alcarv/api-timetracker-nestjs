import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentDto } from 'src/models/dto/establishment.dto';
import { TypeDto } from 'src/models/dto/type.dto';
import { Reserva } from 'src/models/dto/reserva.dto';
import { GenericMessage } from 'src/models/dto/genericMessage.dto';

@Controller('estabelecimento')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Get('/tipos')
  async getAllTypes(): Promise<TypeDto[]> {
    return this.establishmentService.pegarTodosOstipos();
  }

  @Get('/filtro/tipo/:filtro')
  async getTypesFiltered(@Param('filtro') filtro: string): Promise<TypeDto[]> {
    return this.establishmentService.filtrarTipos(filtro.toLowerCase());
  }

  @Get('/:tipo')
  async getByType(@Param('tipo') tipo: string): Promise<EstablishmentDto[]> {
    return this.establishmentService.pegarPorTipo(tipo.toLowerCase());
  }

  @Get('/:nome/:tipo')
  async getByNameAndType(@Param('tipo') tipo: string, @Param('nome') nome: string): Promise<EstablishmentDto[]> {
    return this.establishmentService.pegarPorTipoENome(tipo, nome); 
  }

  @Get('id/:id')
  async getById(@Param('id') id: string): Promise<EstablishmentDto> {
    return this.establishmentService.pegarPorId(id); 
  }

  @Post('add/tipo')
  async addTipos(@Body() tipo: TypeDto): Promise<TypeDto> {
    return this.establishmentService.adicionartipos(tipo); 
  }

  @Post('/reserva/remove')
  async removeReserva(@Body() reserva: Reserva): Promise<GenericMessage> {
    return this.establishmentService.removeReserva(reserva); 
  }
}
