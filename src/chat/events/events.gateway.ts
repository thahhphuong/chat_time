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

@WebSocketGateway(5000)
export class ChatGateway implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;
    onModuleInit() {
        this.server.on("connection", (socket) => {
            console.log(`socket ${socket.id} connected`);
        })
    }
    handleConnection(client: any, ...args: any[]) {
        // this.logger.log(`Client connected: ${client.id}`);
        // client.on('disconnecting', (reason) => {
        //     this.logger.log(`DISCONNECTING: ${Array.from(client.rooms)}`); // Set { ... }
        // });
    }
    handleDisconnect(client: any) {
        console.log(client.id);
    }
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): string {
        console.log("data: ", data);

        return data;
    }
}