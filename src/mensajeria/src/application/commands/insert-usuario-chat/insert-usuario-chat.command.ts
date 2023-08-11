import { ICommand } from "@nestjs/cqrs";

export class InsertUsuarioChatCommand implements ICommand {
    constructor(public readonly idChat: number,
        public readonly usuarios: number[]){}
  }