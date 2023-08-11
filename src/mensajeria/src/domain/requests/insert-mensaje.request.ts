import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class InsertMensajeRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly idUsuario: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly idChat: number;
    
    @ApiProperty()
    @IsNotEmpty()
    readonly descripcion: string;
}