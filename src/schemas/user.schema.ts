import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
    @Prop({ required: true })
    userName: string
    @Prop()
    address: string
    @Prop()
    age: number
    @Prop({ required: true })
    gender: UserGender
}
export enum UserGender {
    MALE = 1,
    FEMAIL = 2
}
export const UserSchema = SchemaFactory.createForClass(User);