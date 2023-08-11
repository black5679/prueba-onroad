import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Chat } from "src/domain/models/chat.model";
import { ResponseModel } from "src/domain/models/response.model";
import { UsuarioChat } from "src/domain/models/usuario-chat.model";
import { ChatRepository } from "src/infrastructure/repositories/chat.repository";
import { UsuarioChatRepository } from "src/infrastructure/repositories/usuario-chat.repository";
import { InsertChatCommand } from "./insert-chat.command";

@CommandHandler(InsertChatCommand)
export class InsertChatHandler implements ICommandHandler<InsertChatCommand, ResponseModel> {
    constructor(private readonly chatRepository: ChatRepository, private readonly usuarioChatRepository: UsuarioChatRepository) { }

    async execute(command: InsertChatCommand): Promise<ResponseModel> {
        let chat = new Chat();
        chat.descripcion = command.descripcion;
        chat.idUsuarioCreacion = command.idUsuarioCreacion;
        chat.titulo = command.titulo;
        chat.imagen = command.imagen;
        const id = await this.chatRepository.register(chat);
        let usuariosChat: UsuarioChat[] = [];
        command.usuarios.forEach(element => {
           let usuarioChat = new UsuarioChat();
           usuarioChat.idChat = id;
           usuarioChat.idUsuario = element;
        });
        await this.usuarioChatRepository.register(usuariosChat);
        return new ResponseModel("Chat registrado con éxito",id);
    }
}