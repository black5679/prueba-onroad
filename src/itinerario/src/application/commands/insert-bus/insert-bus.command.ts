import { ICommand } from "@nestjs/cqrs";

export class InsertBusCommand implements ICommand {
    constructor(
        public readonly placa: string,
        public readonly operadora: string,
        public readonly asientos: any[]
    ) { }

}