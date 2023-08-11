import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Mensaje } from "src/domain/models/mensaje.model";
import { ResponseModel } from "src/domain/models/response.model";
import { MensajeRepository } from "src/infrastructure/repositories/mensaje.repository";
import { InsertMensajeCommand } from "./insert-mensaje.command";

@CommandHandler(InsertMensajeCommand)
export class InsertMensajeHandler implements ICommandHandler<InsertMensajeCommand, ResponseModel> {
    constructor(private readonly mensajeRepository: MensajeRepository) { }

    async execute(command: InsertMensajeCommand): Promise<ResponseModel> {
        let mensaje = new Mensaje();
        mensaje.descripcion = command.descripcion;
        mensaje.idUsuario = command.idUsuario;
        mensaje.idChat = command.idChat;
        const id = await this.mensajeRepository.register(mensaje);
        return new ResponseModel("Mensaje registrado con éxito",id);
    }
}