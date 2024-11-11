import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
@Controller("users")
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }
    @UseGuards(AuthGuard)
    @Get('/profile')
    getProfile(@Request() req: any) {
        return req.user;
    }
    @Post()
    async create(@Body() body: UserDto) {
        const newUser = await this.userService.create(body)
        return newUser
    }
}