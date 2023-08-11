import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetTiposUsuarioHandler } from './application/queries/get-tipos-usuario/get-tipos-usuario.handler';
import { AppDataSource } from './infrastructure/app-data-source';
import { TipoUsuarioRepository } from "./infrastructure/repositories/tipo-usuario.repository";
import { BusRepository } from './infrastructure/repositories/bus.repository';
import { GetBusByIdHandler } from './application/queries/get-bus-by-id/get-bus-by-id.handler';
import { BusController } from './api/controllers/bus.controller';
import { TipoUsuarioController } from './api/controllers/tipo-usuario.controller';
import { AsientoRepository } from './infrastructure/repositories/asiento.repository';
import { ItinerarioRepository } from './infrastructure/repositories/itinerario.repository';
import { InsertBusHandler } from './application/commands/insert-bus/insert-bus.handler';
import { UpdateBusHandler } from './application/commands/update-bus/update-bus.handler';
import { DeleteBusHandler } from './application/commands/delete-bus/delete-bus.handler';
import { GetBusesHandler } from './application/queries/get-buses/get-buses.handler';
import { InsertItinerarioHandler } from './application/commands/insert-itinerario/insert-itinerario.handler';
import { UpdateItinerarioHandler } from './application/commands/update-itinerario/update-itinerario.handler';
import { ItinerarioController } from './api/controllers/itinerario.controller';
import { TipoAsientoController } from './api/controllers/tipo-asiento.controller';
import { GetTiposAsientoHandler } from './application/queries/get-tipos-asiento/get-tipos-asiento.handler';
import { TipoAsientoRepository } from './infrastructure/repositories/tipo-asiento.repository';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [CqrsModule,ScheduleModule.forRoot()],
  controllers: [TipoUsuarioController, BusController, ItinerarioController, TipoAsientoController],
  providers: [AppDataSource, 
    TipoUsuarioRepository, BusRepository, AsientoRepository, ItinerarioRepository, TipoAsientoRepository,
    GetTiposUsuarioHandler, GetBusesHandler, GetBusByIdHandler, InsertBusHandler, UpdateBusHandler, DeleteBusHandler, InsertItinerarioHandler, UpdateItinerarioHandler, GetTiposAsientoHandler],
})
export class AppModule {}
