import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ChatController } from './api/controllers/chat.controller';
import { MensajeController } from './api/controllers/mensaje.controller';
import { UsuarioChatController } from './api/controllers/usuario-chat.controller';
import { AppGateway } from './app.gateway';
import { DeleteChatHandler } from './application/commands/delete-chat/delete-chat.handler';
import { DeleteMensajeHandler } from './application/commands/delete-mensaje/delete-mensaje.handler';
import { DeleteUsuarioChatHandler } from './application/commands/delete-usuario-chat/delete-usuario-chat.handler';
import { InsertChatHandler } from './application/commands/insert-chat/insert-chat.handler';
import { InsertMensajeHandler } from './application/commands/insert-mensaje/insert-mensaje.handler';
import { InsertUsuarioChatHandler } from './application/commands/insert-usuario-chat/insert-usuario-chat.handler';
import { UpdateChatHandler } from './application/commands/update-chat/update-chat.handler';
import { UpdateMensajeHandler } from './application/commands/update-mensaje/update-mensaje.handler';
import { GetChatsByIdUsuarioHandler } from './application/queries/get-chats-by-id-usuario/get-chats-by-id-usuario.handler';
import { GetMensajesByIdChatHandler } from './application/queries/get-mensajes-by-id-chat/get-mensajes-by-id-chat.handler';
import { AppDataSource } from './infrastructure/app-data-source';
import { ChatRepository } from './infrastructure/repositories/chat.repository';
import { MensajeRepository } from './infrastructure/repositories/mensaje.repository';
import { UsuarioChatRepository } from './infrastructure/repositories/usuario-chat.repository';
@Module({
  imports: [CqrsModule],
  controllers: [ChatController, MensajeController, UsuarioChatController],
  providers: [AppDataSource, ChatRepository, UsuarioChatRepository, MensajeRepository,
  GetChatsByIdUsuarioHandler, GetMensajesByIdChatHandler, InsertMensajeHandler, UpdateMensajeHandler, DeleteMensajeHandler, InsertChatHandler, UpdateChatHandler, DeleteChatHandler, InsertUsuarioChatHandler, DeleteUsuarioChatHandler,
  AppGateway],
})
export class AppModule {}
