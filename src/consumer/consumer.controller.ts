import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ConsumerDto } from './models/consumer.dto';

@Controller('consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService ) {}

  @Post('cadastro')
  async cadastrar(@Body() consumerDto: ConsumerDto): Promise<ConsumerDto> {
    return this.consumerService.create(consumerDto);
  }

  @Get('todos')
  async getAll(): Promise<ConsumerDto[]> {
    return this.consumerService.getAll();
  }

  @Get('/:id')
  async pegarPerfil(@Param('id') id: string): Promise<ConsumerDto>{
    return this.consumerService.pegarPerfil(id);
  }

}
