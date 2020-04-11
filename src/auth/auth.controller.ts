import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConsumerDto } from '../models/consumer.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('cadastro/consumidor')
  async cadastrar(@Body() consumerDto: ConsumerDto): Promise<ConsumerDto> {
    return this.authService.create(consumerDto);
  }

  @Get('/:id')
  async pegarPerfil(@Param('id') id: string): Promise<ConsumerDto>{
    return this.authService.pegarPerfil(id);
  }

}
