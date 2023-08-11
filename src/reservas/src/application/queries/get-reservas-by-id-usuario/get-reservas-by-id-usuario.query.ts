import { IQuery } from "@nestjs/cqrs";

export class GetReservasByIdUsuarioQuery implements IQuery {
    constructor(public readonly id: number){}
  }