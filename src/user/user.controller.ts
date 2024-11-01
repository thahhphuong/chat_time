import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
@Controller("users")
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
    @Post()
    async create(@Body() body: UserDto) {
        const newUser = await this.userService.create(body)
        return newUser
    }
}