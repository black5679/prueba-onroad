import { Injectable } from "@nestjs/common";
import { Mensaje } from "src/domain/models/mensaje.model";
import { IMensajeRepository } from "src/domain/repositories/mensaje.repository.interface";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class MensajeRepository extends Repository<Mensaje> implements IMensajeRepository {
    constructor(dataSource: DataSource) {
        super(Mensaje, dataSource.createEntityManager());
    }

    // Lista los mensajes por id del chat
    async getByIdChat(id: number): Promise<Mensaje[]> {
        return await this.find({where: { idChat: id }})
    }

    // Registra un mensaje
    async register(mensaje: Mensaje): Promise<number> {
        const response = await this.createQueryBuilder()
        .insert()
        .into(Mensaje)
        .values([
            mensaje,
        ])
        .execute()
        return Number(response.raw[0].id);
    }

    // Modifica un mensaje
    async modify(mensaje: Mensaje): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ descripcion: mensaje.descripcion })
        .where({ id: mensaje.id })
        .execute()
        return mensaje.id;
    }

    // Elimina un mensaje
    async eliminate(id: number): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ activo: false })
        .where({ id })
        .execute()
        return id;
    }
}