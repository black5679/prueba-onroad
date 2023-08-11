export class GetReservasByIdUsuarioResponse {
    constructor(public readonly id: number,
        public readonly idTipoAsiento: number,
        public readonly idAsiento: number,
        public readonly idItinerario: number,
    ){}
}