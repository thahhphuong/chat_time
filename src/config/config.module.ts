// src/config/config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnviromentConfig } from 'src/config/config.service';

@Module({
    imports: [ConfigModule],
    providers: [EnviromentConfig],
    exports: [EnviromentConfig],
})
export class EnviromentConfigModule { }
