import { ICommand } from "@nestjs/cqrs";

export class InsertChatCommand implements ICommand {
    constructor(public readonly idUsuarioCreacion: number,
        public readonly titulo: string,
        public readonly descripcion: string,
        public readonly imagen: string,
        public readonly usuarios: number[]){}
  }