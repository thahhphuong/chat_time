import { Module } from "@nestjs/common";
import { AuthController } from "src/auth/auth.controller";
import { AuthService } from "src/auth/auth.service";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.service";
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from "src/schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { EnviromentConfigModule } from "src/config/config.module";
import { EnviromentConfig } from "src/config/config.service";
import { MessageModule } from "src/message/message.module";
import { MessageService } from "src/message/message.service";
import { Message, MessageSchema } from "src/schemas/message.schema";
import { AuthGuard } from "src/auth/auth.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        // MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
        JwtModule.registerAsync({
            imports: [EnviromentConfigModule],
            useFactory: async (configService: EnviromentConfig) => ({
                secret: configService.privateTokenKey(),
                global: true
            }),
            inject: [EnviromentConfig],
        }),
    ],

    controllers: [AuthController],
    providers: [AuthService, UserService],
    exports: [JwtModule],
})

export class AuthModule { }