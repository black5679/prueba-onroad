export class GetBusesResponse {
    constructor(public readonly id: number,
        public readonly placa: string,
        public readonly operadora: string
    ){}
}