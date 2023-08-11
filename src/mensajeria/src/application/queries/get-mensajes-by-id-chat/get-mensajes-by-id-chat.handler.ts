import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetMensajesByIdChatResponse } from "src/domain/responses/get-mensajes-by-id-chat.response";
import { MensajeRepository } from "src/infrastructure/repositories/mensaje.repository";
import { GetMensajesByIdChatQuery } from "./get-mensajes-by-id-chat.query";

@QueryHandler(GetMensajesByIdChatQuery)
export class GetMensajesByIdChatHandler implements IQueryHandler<GetMensajesByIdChatQuery, GetMensajesByIdChatResponse[]> {
    constructor(private readonly mensajeRepository: MensajeRepository) { }

    async execute(query: GetMensajesByIdChatQuery): Promise<GetMensajesByIdChatResponse[]> {
        const mensajes = await this.mensajeRepository.getByIdChat(query.id);
        let response: GetMensajesByIdChatResponse[] = [];
        mensajes.forEach((element) => {
            const item = new GetMensajesByIdChatResponse(element.id, element.idUsuario, element.idChat, element.fechaCreacion, element.descripcion)
            response.push(item);
        })
        return response;
    }
}