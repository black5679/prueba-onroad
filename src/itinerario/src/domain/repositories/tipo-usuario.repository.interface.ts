import { TipoUsuario } from "../models/tipo-usuario.model";

export interface ITipoUsuarioRepository {
    get(): Promise<TipoUsuario[]>;
}