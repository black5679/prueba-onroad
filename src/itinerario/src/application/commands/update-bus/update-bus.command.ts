import { ICommand } from "@nestjs/cqrs";

export class UpdateBusCommand implements ICommand {
    constructor(
        public readonly id: number,
        public readonly placa: string,
        public readonly operadora: string
        ){}
  }