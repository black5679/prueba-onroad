import { IQuery } from "@nestjs/cqrs";

export class GetChatsByIdUsuarioQuery implements IQuery {
    constructor(public readonly id: number){}
  }