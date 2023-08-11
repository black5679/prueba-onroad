import "reflect-metadata"
import { Carrito } from "src/domain/models/carrito.model";
import { Reserva } from "src/domain/models/reserva.model";
import { DataSource } from "typeorm"

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
            entities: [Reserva, Carrito],
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