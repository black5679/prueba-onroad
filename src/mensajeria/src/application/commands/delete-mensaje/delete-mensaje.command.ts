import { ICommand } from "@nestjs/cqrs";

export class DeleteMensajeCommand implements ICommand {
    constructor(public readonly id: number){}
  }