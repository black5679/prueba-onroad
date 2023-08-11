import { Chat } from "../models/chat.model";

export interface IChatRepository {
    getByIdsChat(ids: number[]): Promise<Chat[]>
    register(chat: Chat): Promise<number>;
    modify(chat: Chat): Promise<number>;
    eliminate(id: number): Promise<number>;
}