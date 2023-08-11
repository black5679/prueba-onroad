import { Injectable } from "@nestjs/common";
import { Carrito } from "src/domain/models/carrito.model";
import { ICarritoRepository } from "src/domain/repositories/carrito.repository.interface";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CarritoRepository extends Repository<Carrito> implements ICarritoRepository {
    constructor(dataSource: DataSource) {
        super(Carrito, dataSource.createEntityManager());
    }

    // Obtiene los carritos por el id del usuario
    async getByIdUsuario(id: number): Promise<Carrito[]> {
        return await this.find({where: { idUsuario: id }})
    }

    // Registra un carrito
    async register(carrito: Carrito): Promise<number> {
        const response = await this.createQueryBuilder()
        .insert()
        .into(Carrito)
        .values([
            carrito,
        ])
        .execute()
        return Number(response.raw[0].id);
    }
}