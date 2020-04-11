import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConsumerDto } from '../models/dto/consumer.dto';
import { EstablishmentDto } from 'src/models/dto/establishment.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('cadastro/consumidor')
  async cadastrar(@Body() consumerDto: ConsumerDto): Promise<ConsumerDto> {
    return this.authService.createConsu(consumerDto);
  }

  @Post("cadastro/estabelecimento")
  async create(@Body() establishment: EstablishmentDto): Promise<EstablishmentDto> {
    return this.authService.createEstab(establishment);
  }

  @Get('consumidor/:id')
  async pegarPerfilConsu(@Param('id') id: string): Promise<ConsumerDto>{
    return this.authService.pegarPerfilConsu(id);
  }

  @Get('estabelecimento/:id')
  async pegarPerfilEstab(@Param('id') id: string): Promise<EstablishmentDto>{
    return this.authService.pegarPerfilEstab(id);
  }

}
