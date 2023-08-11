import { ICommand } from "@nestjs/cqrs";

export class InsertItinerarioCommand implements ICommand {
    constructor(
        public readonly idCiudadOrigen: number,
        public readonly idCiudadDestino: number,
        public readonly horaSalida: Date,
        public readonly horaLlegada: Date,
        public readonly precioPasaje: number,
        public readonly idBus: number
        ){}
  }