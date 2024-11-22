import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model, mongo, ObjectId } from "mongoose";
import { CreateMessageDto } from "src/message/message.dto";
import { Conversation } from "src/schemas/conversation.schema";
import { Message } from "src/schemas/message.schema";

@Injectable()
export class ConversationService {
    constructor(
        @InjectModel(Conversation.name)
        private readonly conversationModel: Model<Conversation>
    ) { }

}