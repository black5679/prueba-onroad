import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetChatsByIdUsuarioResponse } from "src/domain/responses/get-chats-by-id-usuario.response";
import { ChatRepository } from "src/infrastructure/repositories/chat.repository";
import { UsuarioChatRepository } from "src/infrastructure/repositories/usuario-chat.repository";
import { GetChatsByIdUsuarioQuery } from "./get-chats-by-id-usuario.query";

@QueryHandler(GetChatsByIdUsuarioQuery)
export class GetChatsByIdUsuarioHandler implements IQueryHandler<GetChatsByIdUsuarioQuery, GetChatsByIdUsuarioResponse[]> {
    constructor(private readonly usuarioChatRepository: UsuarioChatRepository, private readonly chatRepository: ChatRepository) { }

    async execute(query: GetChatsByIdUsuarioQuery): Promise<GetChatsByIdUsuarioResponse[]> {
        const usuarios = await this.usuarioChatRepository.getByIdUsuario(query.id);
        let ids: number[] = [];
        usuarios.forEach((element) => {
            ids.push(element.idChat);
        })
        const chats = await this.chatRepository.getByIdsChat(ids);
        let response: GetChatsByIdUsuarioResponse[] = [];
        chats.forEach((element) => {
            const chat = new GetChatsByIdUsuarioResponse(element.id, element.idUsuarioCreacion, element.titulo, element.descripcion, element.imagen);
            response.push(chat)
        })
        return response;
    }
}