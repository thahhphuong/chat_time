import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [ // import module
    MongooseModule.forRoot('mongodb://localhost:27017/chat_real_time'),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }