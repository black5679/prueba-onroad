import { ICommand } from "@nestjs/cqrs";

export class DeleteBusCommand implements ICommand {
    constructor(
        public readonly id: number
    ) { }
}