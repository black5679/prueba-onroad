import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
export class InsertItinerarioRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly idBus: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly idCiudadOrigen: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly idCiudadDestino: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly precioPasaje: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly horaSalida: Date;

    @ApiProperty()
    @IsNotEmpty()
    readonly horaLlegada: Date;
}