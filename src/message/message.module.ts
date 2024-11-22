import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { AuthService } from "src/auth/auth.service";
import { ConnectCollectionMongoModule } from "src/config/databases/conect-collection-mongose.module";
import { ConversationModule } from "src/conversation/conversation.module";
import { ConversationService } from "src/conversation/conversation.service";

import { MessageController } from "src/message/message.controller";
import { MessageService } from "src/message/message.service";
import { Conversation, ConversationSchema } from "src/schemas/conversation.schema";
import { Message, MessageSchema } from "src/schemas/message.schema";


@Module({
    controllers: [MessageController],
    providers: [MessageService, ConversationService], // call service
    imports: [
        ConnectCollectionMongoModule,
        AuthModule,
        ConversationModule,
    ],
    exports: [MessageService]
})
export class MessageModule { }