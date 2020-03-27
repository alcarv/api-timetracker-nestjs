import { Module } from '@nestjs/common';
import { EstablishmentModule } from './establishment/establishment.module';
import { AuthModule } from './auth/auth.module';
import { ConsumerModule } from './consumer/consumer.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EstablishmentModule,
    AuthModule,
    ConsumerModule,
    MongooseModule.forRoot('mongodb+srv://root:timetracker123@time-tracker-4qmlq.gcp.mongodb.net/timetracker?retryWrites=true&w=majority', {useNewUrlParser: true})
  ]
})
export class AppModule {}
