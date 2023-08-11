import { IsNotEmpty, Length } from 'class-validator'
export class InsertBusRequest {
    @IsNotEmpty()
    readonly placa: string;

    @IsNotEmpty()
    readonly operadora: string;

    @Length(20,35)
    readonly asientos: Asiento[]
}

class Asiento {
    @IsNotEmpty()
    idTipoAsiento: number;

    @IsNotEmpty()
    idBus: number;
}