import { TipoAsiento } from "../models/tipo-asiento.model";

export interface ITipoAsientoRepository {
    get(): Promise<TipoAsiento[]>;
}