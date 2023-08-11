import { Chat } from "src/domain/models/chat.model";
import { Mensaje } from "src/domain/models/mensaje.model";
import { UsuarioChat } from "src/domain/models/usuario-chat.model";
import { Usuario } from "src/domain/models/usuario.model";
import { DataSource } from "typeorm";

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
            entities: [Usuario, UsuarioChat, Chat, Mensaje],
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