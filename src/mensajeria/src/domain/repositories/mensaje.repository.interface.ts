import { Mensaje } from "../models/mensaje.model";

export interface IMensajeRepository {
    getByIdChat(id: number): Promise<Mensaje[]>;
    register(mensaje: Mensaje): Promise<number>;
    modify(mensaje: Mensaje): Promise<number>;
    eliminate(id: number): Promise<number>;
}