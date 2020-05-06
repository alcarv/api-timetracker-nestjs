import { Controller, Post, Body} from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { Reserva } from 'src/models/dto/reserva.dto';
import { GenericMessage } from 'src/models/dto/genericMessage.dto';

@Controller('/consumidor')
export class ConsumerController {

  constructor(
    private consumerService: ConsumerService
  ) {}

  @Post('/reserva')
  async addTipos(@Body() reserva: Reserva): Promise<GenericMessage> {
    return this.consumerService.reservarHorario(reserva);
  }

}
