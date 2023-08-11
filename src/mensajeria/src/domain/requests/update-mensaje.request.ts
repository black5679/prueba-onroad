import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateMensajeRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly descripcion: string;
}