import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { IItinerarioRepository } from "src/domain/repositories/itinerario.repository.interface";
import { Itinerario } from "src/domain/models/itinerario.model";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class ItinerarioRepository extends Repository<Itinerario> implements IItinerarioRepository {
    constructor(dataSource: DataSource) {
        super(Itinerario, dataSource.createEntityManager());
    }

    // Lista los itinerarios por el id del bus
    async getByIdBus(id: number): Promise<Itinerario[]> {
        return await this.find({where: { idBus: id }})
    }

    // Registra un itinerario
    async register(itinerario: Itinerario): Promise<number> {
        const response = await this.createQueryBuilder()
        .insert()
        .into(Itinerario)
        .values([
            itinerario,
        ])
        .execute()
        return Number(response.raw[0].id);
    }

    // Modifica un itinerario
    async modify(itinerario: Itinerario): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ idCiudadDestino: itinerario.idCiudadDestino, idCiudadOrigen: itinerario.idCiudadOrigen, idBus: itinerario.idBus, horaLlegada: itinerario.horaLlegada, horaSalida: itinerario.horaSalida, precioPasaje: itinerario.precioPasaje })
        .where({ id: itinerario.id })
        .execute()
        return itinerario.id;
    }

    @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
    handleCron() {
        // Generar algun reporte
    }
}