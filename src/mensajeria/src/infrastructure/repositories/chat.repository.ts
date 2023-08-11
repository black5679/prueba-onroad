import { Injectable } from "@nestjs/common";
import { Chat } from "src/domain/models/chat.model";
import { IChatRepository } from "src/domain/repositories/chat.repository.interface";
import { DataSource, Repository, In } from "typeorm";

@Injectable()
export class ChatRepository extends Repository<Chat> implements IChatRepository {
    constructor(dataSource: DataSource) {
        super(Chat, dataSource.createEntityManager());
    }
    // Lista Los chats por los ids
    async getByIdsChat(ids: number[]): Promise<Chat[]> {
        return await this.find({where: { id: In(ids) }})
    }

    // Registra un chat
    async register(chat: Chat): Promise<number> {
        const response = await this.createQueryBuilder()
        .insert()
        .into(Chat)
        .values([
            chat,
        ])
        .execute()
        return Number(response.raw[0].id);
    }

    // Modifica un chat
    async modify(chat: Chat): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ titulo: chat.titulo, descripcion: chat.descripcion, imagen: chat.imagen })
        .where({ id: chat.id })
        .execute()
        return chat.id;
    }

    // Elimina un chat
    async eliminate(id: number): Promise<number> {
        await this.createQueryBuilder()
        .update()
        .set({ activo: false })
        .where({ id })
        .execute()
        return id;
    }
}