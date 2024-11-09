import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Schema()
export class Message {
    @Prop({ required: true, type: String })
    content: string
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    sender: User
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    receiver: User
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' })
    conversation: ObjectId
}
export const MessageSchema = SchemaFactory.createForClass(Message);