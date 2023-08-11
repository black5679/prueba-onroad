import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Socket, Server } from 'socket.io';
import { Mensaje } from './domain/models/mensaje.model';
import { MensajeRepository } from './infrastructure/repositories/mensaje.repository';
  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class AppGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
  {
    constructor(private mensajeRepository: MensajeRepository) {}
  
    @WebSocketServer() server: Server;
  
    @SubscribeMessage('sendMessage')
    async handleSendMessage(client: Socket, payload: Mensaje): Promise<void> {
      await this.mensajeRepository.register(payload);
      this.server.emit('recMessage', payload);
    }
  
    afterInit(server: Server) {
      console.log(server);
      //Do stuffs
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Disconnected: ${client.id}`);
      //Do stuffs
    }
  
    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Connected ${client.id}`);
      //Do stuffs
    }
  }