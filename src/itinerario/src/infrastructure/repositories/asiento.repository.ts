import { Injectable } from "@nestjs/common";
import { Asiento } from "src/domain/models/asiento.model";
import { DataSource, Repository } from "typeorm";
import { IAsientoRepository } from "src/domain/repositories/asiento.repository.interface";

@Injectable()
export class AsientoRepository extends Repository<Asiento> implements IAsientoRepository {
    constructor(dataSource: DataSource) {
        super(Asiento, dataSource.createEntityManager());
    }

    // Obtiene un asiento
    async getByIdBus(id: number): Promise<Asiento[]> {
        return await this.find({
            where: {
            idBus: id
        },}
        );
    }
    
    // Registra varios asientos
    async register(asientos: Asiento[]): Promise<number[]>{
        const response = await this.createQueryBuilder()
        .insert()
        .into(Asiento)
        .values(
            asientos
        )
        .execute()
        let res: number[] = [];
        response.raw.forEach((element: any) =>{
            res.push(element.id);
        })
        return res;
    }
}