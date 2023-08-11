import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { ITipoAsientoRepository } from "src/domain/repositories/tipo-asiento.repository.interface";
import { TipoAsiento } from "src/domain/models/tipo-asiento.model";

@Injectable()
export class TipoAsientoRepository extends Repository<TipoAsiento> implements ITipoAsientoRepository {
    constructor(dataSource: DataSource) {
        super(TipoAsiento, dataSource.createEntityManager());
    }

    // Lista los tipos de asiento
    async get(): Promise<TipoAsiento[]> {
        return await this.find();
    }
}