import { Asiento } from "../models/asiento.model";

export interface IAsientoRepository {
    getByIdBus(id: number): Promise<Asiento[]>;
    register(asientos: Asiento[]): Promise<number[]>;
}