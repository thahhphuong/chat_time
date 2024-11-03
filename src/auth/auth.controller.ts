import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { UserDto } from "src/user/user.dto";
import { UserService } from "src/user/user.service";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }
    @Post("register")
    async register(@Body() body: UserDto) {
        console.log(body)
        const newUser = await this.authService.singUp(body)
        return newUser
    }
    @Post()
    async login(@Body() body: UserDto) {
        const newUser = await this.authService.singIn(body.userName, body.password)
        return newUser
    }
}