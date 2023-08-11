import { Reserva } from "../models/reserva.model";

export interface IReservaRepository {
    getByIdUsuario(id: number): Promise<Reserva[]>;
    register(reserva: Reserva): Promise<number>;
    modify(reserva: Reserva): Promise<number>;
}