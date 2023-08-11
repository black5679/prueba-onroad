import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetTiposAsientoResponse } from "src/domain/responses/get-tipos-asiento.response";
import { TipoAsientoRepository } from "src/infrastructure/repositories/tipo-asiento.repository";
import { GetTiposAsientoQuery } from "./get-tipos-asiento.query";

@QueryHandler(GetTiposAsientoQuery)
export class GetTiposAsientoHandler implements IQueryHandler<GetTiposAsientoQuery, GetTiposAsientoResponse[]> {
  constructor(private readonly repository: TipoAsientoRepository) {}

  async execute() : Promise<GetTiposAsientoResponse[]> {
    const tipoAsiento = await this.repository.get();
    let response : GetTiposAsientoResponse[] = [];
    tipoAsiento.forEach(element => {
      const getTipoAsientoResponse = new GetTiposAsientoResponse(element.id, element.nombre);
      response.push(getTipoAsientoResponse);
    });
    return response;
  }
}