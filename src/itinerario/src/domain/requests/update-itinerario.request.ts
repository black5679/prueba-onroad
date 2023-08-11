import { IsNotEmpty } from 'class-validator'
export class UpdateItinerarioRequest {
    @IsNotEmpty()
    readonly idBus: number;

    @IsNotEmpty()
    readonly idCiudadOrigen: number;

    @IsNotEmpty()
    readonly idCiudadDestino: number;

    @IsNotEmpty()
    readonly precioPasaje: number;

    @IsNotEmpty()
    readonly horaSalida: Date;

    @IsNotEmpty()
    readonly horaLlegada: Date;
}