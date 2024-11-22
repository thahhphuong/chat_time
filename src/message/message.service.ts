import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model, mongo, ObjectId } from "mongoose";
import { CreateMessageDto } from "src/message/message.dto";
import { Conversation } from "src/schemas/conversation.schema";
import { Message } from "src/schemas/message.schema";

@Injectable()
export class MessageService {
    constructor(
        @InjectModel(Message.name)
        private readonly messageModel: Model<Message>,
        @InjectModel(Conversation.name)
        private readonly conversationModel: Model<Conversation>
    ) { }
    async getInfoMess(id: ObjectId, user: ObjectId): Promise<Message[]> {
        const messages = await this.messageModel.find({
            _id: id, $or: [
                {
                    sender: user
                }, {
                    receiver: user
                }
            ]
        }).exec()

        return messages
    }
    async create(data: CreateMessageDto): Promise<Message | any> {
        // const created = new this.messageModel(data)

        return data
    }
    async getList(data: CreateMessageDto): Promise<Message | any> {
        // const created = new this.messageModel(data)
        return data
    }
}