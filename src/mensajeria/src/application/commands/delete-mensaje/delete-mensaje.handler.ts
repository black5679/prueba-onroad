import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { MensajeRepository } from "src/infrastructure/repositories/mensaje.repository";
import { DeleteMensajeCommand } from "./delete-mensaje.command";

@CommandHandler(DeleteMensajeCommand)
export class DeleteMensajeHandler implements ICommandHandler<DeleteMensajeCommand, ResponseModel> {
    constructor(private readonly mensajeRepository: MensajeRepository) { }

    async execute(command: DeleteMensajeCommand): Promise<ResponseModel> {
        const id = await this.mensajeRepository.eliminate(command.id);
        return new ResponseModel("Mensaje eliminado con éxito",id);
    }
}