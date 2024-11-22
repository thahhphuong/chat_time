import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateMessageDto } from 'src/message/message.dto';
import { MessageService } from 'src/message/message.service';

@Controller("messages")
export class MessageController {
    constructor(
        private readonly messageService: MessageService
    ) { }

    @Get()
    findAll(): string {
        return 'This action returns all message';
    }
    @UseGuards(AuthGuard)
    @Post("")
    async create(@Body() body: CreateMessageDto, @Request() req: any) {
        console.log(req.user);

        return await this.messageService.create(body)
    }
}