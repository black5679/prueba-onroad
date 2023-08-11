import { IsNotEmpty } from 'class-validator'
export class InsertCarritoRequest {
    @IsNotEmpty()
    readonly idUsuario: number;

    @IsNotEmpty()
    readonly idItinerario: number;

    @IsNotEmpty()
    readonly idAsiento: number;

    @IsNotEmpty()
    readonly precioPasaje: number;
}