import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { response } from "express";
import { AuthService } from "src/auth/auth.service";
import { UserDto } from "src/user/user.dto";
import { UserService } from "src/user/user.service";
import { AuthGuard } from './auth.guard';
@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }
    @Post("register")
    async register(@Body() body: UserDto) {
        const newUser = await this.authService.singUp(body)
        return newUser
    }

    // @UseGuards(AuthGuard)
    // @Get('profile')
    // getProfile(@Request() req: any) {
    //     return req.user;
    // }

    @Post("login")
    async login(@Body() body: { userName: string, password: string }) {
        const newUser = await this.authService.singIn(body.userName, body.password)
        return newUser
    }
}