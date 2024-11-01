import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class EnviromentConfig {
    private configService: ConfigService
    constructor() { }
    isAuthEnabled(): boolean {
        return this.configService.get('AUTH_ENABLED') === 'true';
    }
    getMongoUri(): string {
        return this.configService.get('MONGO_URI');
    }
}