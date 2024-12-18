import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { ConfigModule } from '@nestjs/config';
import { EnviromentConfig } from 'src/config/config.service';
import { MongooseCustomModules } from 'src/config/databases/database.module';
import { EnviromentConfigModule } from 'src/config/config.module';
import { MessageModule } from 'src/message/message.module';
import { EventsModule } from 'src/chat/events/events.module';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConversationModule } from 'src/conversation/conversation.module';
import { ConnectCollectionMongoModule } from 'src/config/databases/conect-collection-mongose.module';
@Module({
  imports: [ // import module
    ConnectCollectionMongoModule,
    MongooseCustomModules,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    EnviromentConfigModule,
    MessageModule,
    EventsModule,
    UserModule,
    ConversationModule,

  ],

  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    EnviromentConfig,
  ],
  exports: [EnviromentConfig]
})
export class AppModule { }
