import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { isBoolean, isEmpty, IsEmpty, isNotEmpty } from "class-validator";
import { UserDto } from "src/user/user.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async singUp(body: UserDto): Promise<any> {
        const user = await this.userService.getInfoByUserName(body.userName)

        if (!user) {
            throw new Error("invalid user")
        }
        if (user.password != body.password) {
            throw new UnauthorizedException()
        }
        const { password, ...res } = user
        return res
    }

    async singIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.getInfoByUserName(username)
        if (user.password != pass) {
            throw new UnauthorizedException()
        }
        const payload = { user: user.userName };
        const access_token = await this.jwtService.signAsync(payload)
        const refresh_token = await this.jwtService.signAsync(payload)
        return { access_token, refresh_token }
    }
}
