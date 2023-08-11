import { IQuery } from "@nestjs/cqrs";

export class GetCarritosByIdUsuarioQuery implements IQuery {
    constructor(public readonly id: number){}
  }