import { ICommand } from "@nestjs/cqrs";

export class UpdateChatCommand implements ICommand {
    constructor(public readonly id: number,
        public readonly titulo: string,
        public readonly descripcion: string,
        public readonly imagen: string){}
  }