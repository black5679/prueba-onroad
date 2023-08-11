import { ICommand } from "@nestjs/cqrs";

export class InsertReservaCommand implements ICommand {
    constructor(
        public readonly idTipoAsiento: number,
        public readonly idAsiento: number,
        public readonly idItinerario: number,
        public readonly idUsuario: number,
        public readonly precioPasaje: number
    ){}
  }