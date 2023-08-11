import { Injectable } from "@nestjs/common";
import { Bus } from "src/domain/models/bus.model";
import { DataSource, Repository } from "typeorm";
import { IBusRepository } from "src/domain/repositories/bus.repository.interface";

@Injectable()
export class BusRepository extends Repository<Bus> implements IBusRepository {
    constructor(dataSource: DataSource) {
        super(Bus, dataSource.createEntityManager());
    }

    // Lista los buses
    async get(): Promise<Bus[]> {
        return await this.find({ where: { activo: true }});
    }

    // Obtiene un bus
    async getById(id: number): Promise<Bus> {
        return await this.findOne({where: { id, activo: true }})
    }

    // Registra un bus
    async register(bus: Bus): Promise<number> {
        const response = await this.createQueryBuilder()
        .insert()
        .into(Bus)
        .values([
            bus,
        ])
        .execute()
        return Number(response.raw[0].id);
    }

    // Modifica un bus
    async modify(bus: Bus): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ placa: bus.placa, operadora: bus.operadora })
        .where({ id: bus.id })
        .execute()
        return bus.id;
    }

    // Elimina un bus
    async eliminate(id: number): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ activo: false })
        .where({ id })
        .execute()
        return id;
    }
}