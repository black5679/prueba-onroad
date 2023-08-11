export class GetCarritosByIdUsuarioResponse {
    constructor(public readonly id: number,
        public readonly precioPasaje: number,
        public readonly idAsiento: number,
        public readonly idItinerario: number,
    ){}
}