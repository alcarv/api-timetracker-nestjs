import { Controller, Get } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ConsumerDto } from './models/consumer.dto';

@Controller('consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService ) {}

  @Get('perfil')
  getPerfil(): string {
    let x: ConsumerDto = new ConsumerDto('Alefe', 22, '');
    this.consumerService.create(x);

    return 'ok'
  }

  @Get('todos')
  pegarPerfis(): string {
    let retorno = 'ok';

    this.consumerService.all().then(res => {
      console.log(res)
    }).catch(err => {
      retorno = 'Erro!';
    })

    return retorno;
  }

}
