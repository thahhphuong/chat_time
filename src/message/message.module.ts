import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { AuthService } from "src/auth/auth.service";

import { MessageController } from "src/message/message.controller";
import { MessageService } from "src/message/message.service";
import { Message, MessageSchema } from "src/schemas/message.schema";
import { UserService } from "src/user/user.service";


@Module({
    controllers: [MessageController],
    providers: [MessageService], // call service
    imports: [
        MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
        AuthModule,
    ]
})
export class MessageModule { }