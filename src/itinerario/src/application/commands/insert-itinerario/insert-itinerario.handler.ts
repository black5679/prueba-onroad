import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { InsertItinerarioCommand } from "./insert-itinerario.command";
import { ItinerarioRepository } from "src/infrastructure/repositories/itinerario.repository";
import { Itinerario } from "src/domain/models/itinerario.model";

@CommandHandler(InsertItinerarioCommand)
export class InsertItinerarioHandler implements ICommandHandler<InsertItinerarioCommand, ResponseModel> {
  constructor(private readonly itinerarioRepository: ItinerarioRepository) {}

  async execute(command: InsertItinerarioCommand) : Promise<ResponseModel> {
    let itinerario = new Itinerario();
    itinerario.idCiudadDestino = command.idCiudadDestino;
    itinerario.idCiudadOrigen = command.idCiudadOrigen;
    itinerario.horaLlegada = command.horaLlegada;
    itinerario.horaSalida = command.horaSalida;
    itinerario.idBus = command.idBus;
    itinerario.precioPasaje = command.precioPasaje;
    const id = await this.itinerarioRepository.register(itinerario);
    return new ResponseModel("Itinerario registrado con éxito", id);
  }
}