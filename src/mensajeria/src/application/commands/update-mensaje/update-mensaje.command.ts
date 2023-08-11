import { ICommand } from "@nestjs/cqrs";

export class UpdateMensajeCommand implements ICommand {
    constructor(public readonly id: number,
        public readonly descripcion: string){}
  }