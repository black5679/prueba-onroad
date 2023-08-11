import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetBusesResponse } from "src/domain/responses/get-buses.response";
import { BusRepository } from "src/infrastructure/repositories/bus.repository";
import { GetBusesQuery } from "./get-buses.query";

@QueryHandler(GetBusesQuery)
export class GetBusesHandler implements IQueryHandler<GetBusesQuery, GetBusesResponse[]> {
  constructor(private readonly busRepository: BusRepository) {}

  async execute() : Promise<GetBusesResponse[]> {
    const tipoUsuarios = await this.busRepository.get();
    let response : GetBusesResponse[] = [];
    tipoUsuarios.forEach(element => {
      const getBusesResponse = new GetBusesResponse(element.id, element.placa, element.operadora);
      response.push(getBusesResponse);
    });
    return response;
  }
}