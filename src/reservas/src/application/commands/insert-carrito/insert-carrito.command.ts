import { ICommand } from "@nestjs/cqrs";

export class InsertCarritoCommand implements ICommand {
    constructor(
        public readonly precioPasaje: number,
        public readonly idAsiento: number,
        public readonly idItinerario: number,
        public readonly idUsuario: number
    ){}
  }