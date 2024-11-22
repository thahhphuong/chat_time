import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { ConnectCollectionMongoModule } from "src/config/databases/conect-collection-mongose.module";
import { testModule } from "src/config/databases/connect.multiple";
import { MongooseCustomModules } from "src/config/databases/database.module";
import { ConversationController } from "src/conversation/conversation.controller";
import { ConversationService } from "src/conversation/conversation.service";
import { Conversation, ConversationSchema } from "src/schemas/conversation.schema";
import { User, UserSchema } from "src/schemas/user.schema";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";

@Module({
    controllers: [ConversationController],
    providers: [ConversationService], // call service
    imports: [
        ConnectCollectionMongoModule
    ],
    exports: [ConversationService],

})
export class ConversationModule { }