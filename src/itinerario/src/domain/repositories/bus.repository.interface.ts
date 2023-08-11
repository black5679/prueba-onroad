import { Bus } from "../models/bus.model";

export interface IBusRepository {
    get(): Promise<Bus[]>;
    getById(id: number): Promise<Bus>;
    register(bus: Bus): Promise<number>;
    modify(bus: Bus): Promise<number>;
    eliminate(id: number): Promise<number>;
}