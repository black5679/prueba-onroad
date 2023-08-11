import { NotFoundException } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetBusByIdResponse } from "src/domain/responses/get-bus-by-id.response";
import { AsientoRepository } from "src/infrastructure/repositories/asiento.repository";
import { BusRepository } from "src/infrastructure/repositories/bus.repository";
import { ItinerarioRepository } from "src/infrastructure/repositories/itinerario.repository";
import { GetBusByIdQuery } from "./get-bus-by-id.query";

@QueryHandler(GetBusByIdQuery)
export class GetBusByIdHandler implements IQueryHandler<GetBusByIdQuery, GetBusByIdResponse> {
    constructor(private readonly busRepository: BusRepository, private readonly asientoRepository: AsientoRepository, private readonly itinerarioRepository: ItinerarioRepository) { }

    async execute(query: GetBusByIdQuery): Promise<GetBusByIdResponse> {
        const bus = await this.busRepository.getById(query.id);
        if (!bus) {
            throw new NotFoundException('No se encontró el bus');
        }
        const asientos = await this.asientoRepository.getByIdBus(query.id);
        const itinerarios = await this.itinerarioRepository.getByIdBus(query.id);
        let response = new GetBusByIdResponse(bus.id, bus.placa, bus.operadora, asientos, itinerarios);
        return response;
    }
}