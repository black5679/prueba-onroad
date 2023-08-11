import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetReservasByIdUsuarioResponse } from "src/domain/responses/get-reservas-by-id-usuario.response";
import { ReservaRepository } from "src/infrastructure/repositories/reserva.repository";
import { GetReservasByIdUsuarioQuery } from "./get-reservas-by-id-usuario.query";

@QueryHandler(GetReservasByIdUsuarioQuery)
export class GetReservasByIdUsuarioHandler implements IQueryHandler<GetReservasByIdUsuarioQuery, GetReservasByIdUsuarioResponse[]> {
    constructor(private readonly reservaRepository: ReservaRepository) { }

    async execute(query: GetReservasByIdUsuarioQuery): Promise<GetReservasByIdUsuarioResponse[]> {
        const reservas = await this.reservaRepository.getByIdUsuario(query.id);
        let response : GetReservasByIdUsuarioResponse[] = [];
        reservas.forEach(element => {
          const getTipoAsientoResponse = new GetReservasByIdUsuarioResponse(element.id, element.idTipoAsiento, element.idAsiento, element.idItinerario);
          response.push(getTipoAsientoResponse);
        });
        return response;
    }
}