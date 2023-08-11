import { IsNotEmpty } from 'class-validator'
export class InsertReservaRequest {
    @IsNotEmpty()
    readonly idUsuario: number;

    @IsNotEmpty()
    readonly idItinerario: number;

    @IsNotEmpty()
    readonly idAsiento: number;

    @IsNotEmpty()
    readonly idTipoAsiento: number;

    @IsNotEmpty()
    readonly precioPasaje: number;
}