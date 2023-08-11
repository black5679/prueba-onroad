export class GetBusByIdResponse{
    constructor(
        public readonly id: number,
        public readonly placa: string,
        public readonly operadora: string,
        public readonly asientos: Asiento[],
        public readonly itinerarios: Itinerario[]){}
}

class Asiento{
    id: number;
    idTipoAsiento: number;
}

class Itinerario{
    id: number;
    idCiudadOrigen: number;
    idCiudadDestino: number;
    horaSalida: Date;
    horaLlegada: Date;
    precioPasaje: number;
}