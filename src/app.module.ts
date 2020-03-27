import { Module } from '@nestjs/common';
import { EstablishmentModule } from './establishment/establishment.module';
import { AuthModule } from './auth/auth.module';
import { ConsumerModule } from './consumer/consumer.module'

@Module({
  imports: [
    EstablishmentModule,
    AuthModule,
    ConsumerModule
  ]
})
export class AppModule {}
