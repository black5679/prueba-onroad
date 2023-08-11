import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { ChatRepository } from "src/infrastructure/repositories/chat.repository";
import { DeleteChatCommand } from "./delete-chat.command";

@CommandHandler(DeleteChatCommand)
export class DeleteChatHandler implements ICommandHandler<DeleteChatCommand, ResponseModel> {
    constructor(private readonly chatRepository: ChatRepository) { }

    async execute(command: DeleteChatCommand): Promise<ResponseModel> {
        const id = await this.chatRepository.eliminate(command.id);
        return new ResponseModel("Chat eliminado con éxito",id);
    }
}