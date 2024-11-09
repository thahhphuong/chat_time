import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Schema()
export class Conversation {
    @Prop({ required: true, type: String })
    conversationName: string
    // @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Message' })
    // sender: Message

}
export const ConversationSchema = SchemaFactory.createForClass(Conversation);