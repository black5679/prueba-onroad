import { IQuery } from "@nestjs/cqrs";

export class GetMensajesByIdChatQuery implements IQuery {
    constructor(public readonly id: number){}
  }