import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { ConfigModule } from '@nestjs/config';
import { EnviromentConfig } from 'src/config/config.service';
import { MongooseCustomModules } from 'src/config/databases/database.module';
import { EnviromentConfigModule } from 'src/config/config.module';
import { MessageModule } from 'src/message/message.module';
@Module({
  imports: [ // import module
    MongooseCustomModules,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    EnviromentConfigModule,
    MessageModule
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
