import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model, mongo, ObjectId } from "mongoose";
import { Message } from "src/schemas/message.schema";

@Injectable()
export class MessageService {
    constructor(
        @InjectModel(Message.name)
        private readonly messageModel: Model<Message>
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
}