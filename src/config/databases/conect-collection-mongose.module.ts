import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseCustomModules } from "src/config/databases/database.module";
import { ConversationService } from "src/conversation/conversation.service";
import { MessageService } from "src/message/message.service";
import { Conversation, ConversationSchema } from "src/schemas/conversation.schema";
import { Message, MessageSchema } from "src/schemas/message.schema";
import { User, UserSchema } from "src/schemas/user.schema";
import { UserService } from "src/user/user.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Message.name, schema: MessageSchema },
            { name: Conversation.name, schema: ConversationSchema }])

    ],
    providers: [UserService, MessageService, ConversationService],
    exports: [MongooseModule]
})
export class ConnectCollectionMongoModule { }