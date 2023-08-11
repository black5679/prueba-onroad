import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateChatRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly titulo: string;
    
    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly imagen: string;
}