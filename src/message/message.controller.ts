import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { MessageService } from 'src/message/message.service';

@Controller("messages")
export class MessageController {
    constructor(
        private readonly messageService: MessageService
    ) { }

    @UseGuards(AuthGuard)
    @Get()
    findAll(): string {
        return 'This action returns all message';
    }
    // @Post()
    // async create(@Body() body: UserDto) {
    //     const newUser = await this.messageService.getInfoMess()
    //     return newUser
    // }
}