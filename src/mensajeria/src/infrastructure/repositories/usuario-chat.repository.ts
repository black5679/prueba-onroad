import { Injectable } from "@nestjs/common";
import { UsuarioChat } from "src/domain/models/usuario-chat.model";
import { IUsuarioChatRepository } from "src/domain/repositories/usuario-chat.repository.interface";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UsuarioChatRepository extends Repository<UsuarioChat> implements IUsuarioChatRepository {
    constructor(dataSource: DataSource) {
        super(UsuarioChat, dataSource.createEntityManager());
    }

    // Lista los chats en los que esta incluido el usuario
    async getByIdUsuario(id: number): Promise<UsuarioChat[]> {
        return await this.find({where: { idUsuario: id, activo: true }})
    }

    // Registra un usuario al chat
    async register(usuarioChat: UsuarioChat[]): Promise<number[]> {
        const response = await this.createQueryBuilder()
        .insert()
        .into(UsuarioChat)
        .values(usuarioChat)
        .execute()
        let res: number[] = [];
        response.raw.forEach((element: any) =>{
            res.push(element.id);
        })
        return res;
    }

    // Elimina un usuario del chat
    async eliminate(id: number): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ activo: false })
        .where({ id })
        .execute()
        return id;
    }
}