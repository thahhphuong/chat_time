import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/user.schema";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";

@Module({
    controllers: [UserController],
    providers: [UserService], // call service
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ]
})
export class UserModule { }