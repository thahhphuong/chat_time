import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { EnviromentConfig } from "src/config/config.service";
import { EnviromentConfigModule } from "src/config/config.module";
import { ConnectCollectionMongoModule } from "src/config/databases/conect-collection-mongose.module";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [EnviromentConfigModule,],
            useFactory: async (configService: EnviromentConfig) => ({
                uri: configService.databaseHost(),
            }),
            inject: [EnviromentConfig],
        }),
    ]
})
export class MongooseCustomModules { }