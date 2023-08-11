import "reflect-metadata"
import { DataSource } from "typeorm"
import { TipoUsuario } from "src/domain/models/tipo-usuario.model"
import { Bus } from "src/domain/models/bus.model";
import { Asiento } from "src/domain/models/asiento.model";
import { Itinerario } from "src/domain/models/itinerario.model";
import { TipoAsiento } from "src/domain/models/tipo-asiento.model";

export const AppDataSource = {
    provide: DataSource,
    useFactory: async () => {
        // You can inject config service to provide dynamic DataSourceOptions
        const dataSource = new DataSource({
            type: 'mssql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            synchronize: false,
            logging: true,
            entities: [TipoUsuario, Bus, Asiento, Itinerario, TipoAsiento],
            subscribers: [],
            migrations: [],
            extra: {
                trustServerCertificate: true,
                trustedConnection: true,
            }
        });
        try {
            if (!dataSource.isInitialized) {
                await dataSource.initialize();
            }
        } catch (error) {
            console.error(error?.message);
        }
        return dataSource;
    }
}