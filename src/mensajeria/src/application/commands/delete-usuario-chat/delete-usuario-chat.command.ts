import { ICommand } from "@nestjs/cqrs";

export class DeleteUsuarioChatCommand implements ICommand {
    constructor(public readonly id: number){}
  }