import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetCarritosByIdUsuarioResponse } from "src/domain/responses/get-carritos-by-id-usuario.response";
import { ReservaRepository } from "src/infrastructure/repositories/reserva.repository";
import { GetCarritosByIdUsuarioQuery } from "./get-carritos-by-id-usuario.query";

@QueryHandler(GetCarritosByIdUsuarioQuery)
export class GetCarritosByIdUsuarioHandler implements IQueryHandler<GetCarritosByIdUsuarioQuery, GetCarritosByIdUsuarioResponse[]> {
    constructor(private readonly reservaRepository: ReservaRepository) { }

    async execute(query: GetCarritosByIdUsuarioQuery): Promise<GetCarritosByIdUsuarioResponse[]> {
        const reservas = await this.reservaRepository.getByIdUsuario(query.id);
        let response : GetCarritosByIdUsuarioResponse[] = [];
        reservas.forEach(element => {
          const getTipoAsientoResponse = new GetCarritosByIdUsuarioResponse(element.id, element.precioPasaje, element.idAsiento, element.idItinerario);
          response.push(getTipoAsientoResponse);
        });
        return response;
    }
}