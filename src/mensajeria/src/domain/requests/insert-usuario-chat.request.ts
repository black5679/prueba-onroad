import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class InsertUsuarioChatRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly idChat: number;

    @ApiProperty({ type: 'integer', isArray: true })
    @IsNotEmpty()
    readonly usuarios: number[];
}