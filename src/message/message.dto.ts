import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import mongoose, { isValidObjectId, ObjectId } from "mongoose";
import { IsMongoObjectId, ValidationPipe } from "src/common/validation.pipe";

export class CreateMessageDto {
    @IsNotEmpty()
    content: string
    // @IsNotEmpty()
    // // @IsObjectId(({ value }))
    // receiver: ObjectId
    // @IsNotEmpty()
    // conversation: ObjectId
    conversation: ObjectId
}