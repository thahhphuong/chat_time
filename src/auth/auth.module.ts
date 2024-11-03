import { Module } from "@nestjs/common";
import { AuthController } from "src/auth/auth.controller";
import { AuthService } from "src/auth/auth.service";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.service";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from "src/auth/constants";
import { User, UserSchema } from "src/schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '7h' },
        }),
        UserModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],

    controllers: [AuthController],
    providers: [AuthService, UserService],
})
export class AuthModule { }