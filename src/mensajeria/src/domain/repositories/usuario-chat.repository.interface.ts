import { UsuarioChat } from "../models/usuario-chat.model";

export interface IUsuarioChatRepository {
    getByIdUsuario(id: number): Promise<UsuarioChat[]>;
    register(chat: UsuarioChat[]): Promise<number[]>;
    eliminate(id: number): Promise<number>;
}