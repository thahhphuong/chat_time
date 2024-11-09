import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { EnviromentConfig } from "src/config/config.service";
import { EnviromentConfigModule } from "src/config/config.module";
import { MongooseCustomModules } from "src/config/databases/database.module";
import { User, UserSchema } from "src/schemas/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ]
})
export class testModule { }