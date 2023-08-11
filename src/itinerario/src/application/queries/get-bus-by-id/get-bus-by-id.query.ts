import { IQuery } from "@nestjs/cqrs";

export class GetBusByIdQuery implements IQuery {
    constructor(public readonly id: number){}
  }