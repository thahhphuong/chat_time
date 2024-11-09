import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class EnviromentConfig {
    constructor(private configService: ConfigService) { }
    databaseHost(): string {
        return this.configService.get<string>('MONGODB_URI');
    }
    privateTokenKey(): string {
        console.log(this.configService.get<string>('PRIVATE_KEY_TOKEN'));

        return this.configService.get<string>('PRIVATE_KEY_TOKEN');
    }
}
