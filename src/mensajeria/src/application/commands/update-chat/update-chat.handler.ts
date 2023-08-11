import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Chat } from "src/domain/models/chat.model";
import { ResponseModel } from "src/domain/models/response.model";
import { ChatRepository } from "src/infrastructure/repositories/chat.repository";
import { UpdateChatCommand } from "./update-chat.command";

@CommandHandler(UpdateChatCommand)
export class UpdateChatHandler implements ICommandHandler<UpdateChatCommand, ResponseModel> {
    constructor(private readonly chatRepository: ChatRepository) { }

    async execute(command: UpdateChatCommand): Promise<ResponseModel> {
        let chat = new Chat();
        chat.descripcion = command.descripcion;
        chat.id = command.id;
        chat.titulo = command.titulo;
        chat.imagen = command.imagen;
        const id = await this.chatRepository.modify(chat);
        return new ResponseModel("Chat modificado con éxito",id);
    }
}