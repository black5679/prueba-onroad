import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { UpdateBusCommand } from "./update-bus.command";
import { BusRepository } from "src/infrastructure/repositories/bus.repository";
import { Bus } from "src/domain/models/bus.model";

@CommandHandler(UpdateBusCommand)
export class UpdateBusHandler implements ICommandHandler<UpdateBusCommand, ResponseModel> {
  constructor(private readonly busRepository: BusRepository) {}

  async execute(command: UpdateBusCommand) : Promise<ResponseModel> {
    let bus = new Bus();
    console.log(bus)
    bus.id = command.id;
    bus.operadora = command.operadora;
    bus.placa = command.placa;
    console.log(bus)
    const id = await this.busRepository.modify(bus);
    return new ResponseModel("Itinerario modificado con éxito", id);
  }
}