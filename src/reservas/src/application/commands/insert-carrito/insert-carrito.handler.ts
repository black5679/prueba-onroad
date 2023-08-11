import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Reserva } from "src/domain/models/reserva.model";
import { ResponseModel } from "src/domain/models/response.model";
import { CarritoRepository } from "src/infrastructure/repositories/carrito.repository";
import { InsertCarritoCommand } from "./insert-carrito.command";

@CommandHandler(InsertCarritoCommand)
export class InsertCarritoHandler implements ICommandHandler<InsertCarritoCommand, ResponseModel> {
  constructor(private readonly carritoRepository: CarritoRepository) {}

  async execute(command: InsertCarritoCommand) : Promise<ResponseModel> {
    let carrito = new Reserva();
    carrito.idUsuario = command.idUsuario;
    carrito.idItinerario = command.idItinerario;
    carrito.idAsiento = command.idAsiento;
    carrito.precioPasaje = command.precioPasaje;
    const id = await this.carritoRepository.register(carrito);
    return new ResponseModel("Carrito registrado con éxito", id);
  }
}