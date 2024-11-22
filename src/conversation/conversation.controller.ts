import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ConversationService } from 'src/conversation/conversation.service';
import { CreateMessageDto } from 'src/message/message.dto';
import { MessageService } from 'src/message/message.service';

@Controller("conversations")
export class ConversationController {
    constructor(
        private readonly conversationService: ConversationService
    ) { }

    @Get()
    findAll(): string {
        return 'This action returns all message';
    }

}