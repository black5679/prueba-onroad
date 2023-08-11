import { IsNotEmpty } from 'class-validator'
export class UpdateBusRequest {
    @IsNotEmpty()
    readonly placa: string;

    @IsNotEmpty()
    readonly operadora: string;
}