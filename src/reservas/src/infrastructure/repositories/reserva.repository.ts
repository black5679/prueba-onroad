import { Injectable } from "@nestjs/common";
import { Reserva } from "src/domain/models/reserva.model";
import { IReservaRepository } from "src/domain/repositories/reserva.repository.interface";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ReservaRepository extends Repository<Reserva> implements IReservaRepository {
    constructor(dataSource: DataSource) {
        super(Reserva, dataSource.createEntityManager());
    }

    // Obtiene las reservas por el id del usuario
    async getByIdUsuario(id: number): Promise<Reserva[]> {
        return await this.find({where: { idUsuario: id }})
    }

    // Registra una reserva
    async register(reserva: Reserva): Promise<number> {
        const response = await this.createQueryBuilder()
        .insert()
        .into(Reserva)
        .values([
            reserva,
        ])
        .execute()
        return Number(response.raw[0].id);
    }

    // Modifica una reserva
    async modify(reserva: Reserva): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({  })
        .where({ id: reserva.id })
        .execute()
        return reserva.id;
    }
}