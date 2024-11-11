import { Logger, OnModuleInit } from '@nestjs/common';
import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit {
    @WebSocketServer()
    server: Server;
    onModuleInit() {
        this.server.on("connection", (socket) => {
            console.log("con");
        })
    }
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): string {
        console.log(data);

        return data;
    }
}