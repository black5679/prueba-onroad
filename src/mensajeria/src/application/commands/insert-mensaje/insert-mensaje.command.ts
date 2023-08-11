import { ICommand } from "@nestjs/cqrs";

export class InsertMensajeCommand implements ICommand {
    constructor(public readonly idUsuario: number,
        public readonly idChat: number,
        public readonly descripcion: string){}
  }