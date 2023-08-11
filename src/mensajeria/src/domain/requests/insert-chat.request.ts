import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class InsertChatRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly idUsuarioCreacion: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly titulo: string;
    
    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly imagen: string;

    @ApiProperty({ type: 'integer', isArray: true })
    @IsNotEmpty()
    readonly usuarios: number[]
}