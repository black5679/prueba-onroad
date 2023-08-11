import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { UsuarioChat } from "src/domain/models/usuario-chat.model";
import { UsuarioChatRepository } from "src/infrastructure/repositories/usuario-chat.repository";
import { InsertUsuarioChatCommand } from "./insert-usuario-chat.command";

@CommandHandler(InsertUsuarioChatCommand)
export class InsertUsuarioChatHandler implements ICommandHandler<InsertUsuarioChatCommand, ResponseModel> {
    constructor(private readonly usuarioChatRepository: UsuarioChatRepository) { }

    async execute(command: InsertUsuarioChatCommand): Promise<ResponseModel> {
        let usuariosChat: UsuarioChat[] = [];
        command.usuarios.forEach(element => {
            let usuarioChat = new UsuarioChat();
            usuarioChat.idChat = command.idChat;
            usuarioChat.idUsuario = element;
        });
        const id = await this.usuarioChatRepository.register(usuariosChat);
        return new ResponseModel("Usuarios registrados con éxito",id);
    }
}