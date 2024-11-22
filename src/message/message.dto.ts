import { UsePipes } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";
import mongoose, { isValidObjectId, ObjectId } from "mongoose";
import { isMongoObjectId } from "src/common/check-objectid-mongo";


export class CreateMessageDto {
    @IsNotEmpty()
    content: string
    @IsOptional()
    receiver: ObjectId
    @IsOptional()
    conversation: ObjectId
}