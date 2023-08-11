import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { UpdateItinerarioCommand } from "./update-itinerario.command";
import { ItinerarioRepository } from "src/infrastructure/repositories/itinerario.repository";
import { Itinerario } from "src/domain/models/itinerario.model";

@CommandHandler(UpdateItinerarioCommand)
export class UpdateItinerarioHandler implements ICommandHandler<UpdateItinerarioCommand, ResponseModel> {
  constructor(private readonly itinerarioRepository: ItinerarioRepository) {}

  async execute(command: UpdateItinerarioCommand) : Promise<ResponseModel> {
    let itinerario = new Itinerario();
    itinerario.id = command.id;
    itinerario.idCiudadDestino = command.idCiudadDestino;
    itinerario.idCiudadOrigen = command.idCiudadOrigen;
    itinerario.horaLlegada = command.horaLlegada;
    itinerario.horaSalida = command.horaSalida;
    itinerario.idBus = command.idBus;
    itinerario.precioPasaje = command.precioPasaje;
    const id = await this.itinerarioRepository.modify(itinerario);
    return new ResponseModel("Bus registrado con éxito", id);
  }
}