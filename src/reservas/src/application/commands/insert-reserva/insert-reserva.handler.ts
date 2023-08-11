import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Reserva } from "src/domain/models/reserva.model";
import { ResponseModel } from "src/domain/models/response.model";
import { ReservaRepository } from "src/infrastructure/repositories/reserva.repository";
import { InsertReservaCommand } from "./insert-reserva.command";

@CommandHandler(InsertReservaCommand)
export class InsertReservaHandler implements ICommandHandler<InsertReservaCommand, ResponseModel> {
  constructor(private readonly reservaRepository: ReservaRepository) {}

  async execute(command: InsertReservaCommand) : Promise<ResponseModel> {
    let reserva = new Reserva();
    reserva.idUsuario = command.idUsuario;
    reserva.idItinerario = command.idItinerario;
    reserva.idTipoAsiento = command.idTipoAsiento;
    reserva.idAsiento = command.idAsiento;
    reserva.precioPasaje = command.precioPasaje;
    const id = await this.reservaRepository.register(reserva);
    return new ResponseModel("Reserva registrada con éxito", id);
  }
}