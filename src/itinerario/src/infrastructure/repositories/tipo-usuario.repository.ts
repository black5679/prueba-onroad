import { Injectable } from "@nestjs/common";
import { TipoUsuario } from "src/domain/models/tipo-usuario.model";
import { DataSource, Repository } from "typeorm";
import { ITipoUsuarioRepository } from "src/domain/repositories/tipo-usuario.repository.interface";

@Injectable()
export class TipoUsuarioRepository extends Repository<TipoUsuario> implements ITipoUsuarioRepository {
    constructor(dataSource: DataSource) {
        super(TipoUsuario, dataSource.createEntityManager());
    }

    // Lista Los tipos de usuario
    async get(): Promise<TipoUsuario[]> {
        return await this.find();
    }
}
