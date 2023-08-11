import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResponseModel } from "src/domain/models/response.model";
import { InsertBusCommand } from "./insert-bus.command";
import { BusRepository } from "src/infrastructure/repositories/bus.repository";
import { Bus } from "src/domain/models/bus.model";
import { AsientoRepository } from "src/infrastructure/repositories/asiento.repository";
import { Asiento } from "src/domain/models/asiento.model";

@CommandHandler(InsertBusCommand)
export class InsertBusHandler implements ICommandHandler<InsertBusCommand, ResponseModel> {
  constructor(private readonly busRepository: BusRepository, private readonly asientoRepository: AsientoRepository) {}

  async execute(command: InsertBusCommand) : Promise<ResponseModel> {
    let bus = new Bus();
    bus.operadora = command.operadora;
    bus.placa = command.placa;
    const id = await this.busRepository.register(bus);
    const asientos: Asiento[] = []
    command.asientos.forEach(element => {
      let asiento = new Asiento();
      asiento.idBus = element.idBus;
      asiento.idTipoAsiento = element.idTipoAsiento;
      asientos.push(asiento);
    });
    await this.asientoRepository.register(asientos);
    return new ResponseModel("Bus registrado con éxito", id);
  }
}