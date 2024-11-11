import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { testModule } from "src/config/databases/connect.multiple";
import { MongooseCustomModules } from "src/config/databases/database.module";
import { User, UserSchema } from "src/schemas/user.schema";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";

@Module({
    controllers: [UserController],
    providers: [UserService], // call service
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        AuthModule,
    ],
    exports: [UserService],
})
export class UserModule { }