import { Itinerario } from "../models/itinerario.model";

export interface IItinerarioRepository {
    getByIdBus(id: number): Promise<Itinerario[]>;
    register(itinerario: Itinerario): Promise<number>;
    modify(itinerario: Itinerario): Promise<number>;
}