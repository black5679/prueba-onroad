export class GetAsientosByIdBusResponse{
    constructor(
        public readonly id: number,
        public readonly tipoAsiento: string
    ){}
}