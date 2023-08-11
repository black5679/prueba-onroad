import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Mensaje } from "src/domain/models/mensaje.model";
import { ResponseModel } from "src/domain/models/response.model";
import { MensajeRepository } from "src/infrastructure/repositories/mensaje.repository";
import { UpdateMensajeCommand } from "./update-mensaje.command";

@CommandHandler(UpdateMensajeCommand)
export class UpdateMensajeHandler implements ICommandHandler<UpdateMensajeCommand, ResponseModel> {
    constructor(private readonly mensajeRepository: MensajeRepository) { }

    async execute(command: UpdateMensajeCommand): Promise<ResponseModel> {
        let mensaje = new Mensaje();
        mensaje.descripcion = command.descripcion;
        mensaje.id = command.id;
        const id = await this.mensajeRepository.modify(mensaje);
        return new ResponseModel("Mensaje modificado con éxito",id);
    }
}