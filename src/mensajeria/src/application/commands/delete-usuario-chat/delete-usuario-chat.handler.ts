import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { UsuarioChatRepository } from "src/infrastructure/repositories/usuario-chat.repository";
import { DeleteUsuarioChatCommand } from "./delete-usuario-chat.command";

@CommandHandler(DeleteUsuarioChatCommand)
export class DeleteUsuarioChatHandler implements ICommandHandler<DeleteUsuarioChatCommand, ResponseModel> {
    constructor(private readonly usuarioChatRepository: UsuarioChatRepository) { }

    async execute(command: DeleteUsuarioChatCommand): Promise<ResponseModel> {
        const id = await this.usuarioChatRepository.eliminate(command.id);
        return new ResponseModel("Usuario eliminado con éxito",id);
    }
}