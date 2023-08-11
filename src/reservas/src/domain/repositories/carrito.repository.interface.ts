import { Carrito } from "../models/carrito.model";

export interface ICarritoRepository {
    getByIdUsuario(id: number): Promise<Carrito[]>;
    register(carrito: Carrito): Promise<number>;
}