import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { DeleteBusCommand } from "./delete-bus.command";
import { BusRepository } from "src/infrastructure/repositories/bus.repository";

@CommandHandler(DeleteBusCommand)
export class DeleteBusHandler implements ICommandHandler<DeleteBusCommand, ResponseModel> {
  constructor(private readonly busRepository: BusRepository) {}

  async execute(command: DeleteBusCommand) : Promise<ResponseModel> {
    const id = await this.busRepository.eliminate(command.id);
    return new ResponseModel("Bus eliminado con éxito", id);
  }
}