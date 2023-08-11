import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CarritoController } from './api/controllers/carrito.controller';
import { ReservaController } from './api/controllers/reserva.controller';
import { InsertCarritoHandler } from './application/commands/insert-carrito/insert-carrito.handler';
import { InsertReservaHandler } from './application/commands/insert-reserva/insert-reserva.handler';
import { GetCarritosByIdUsuarioHandler } from './application/queries/get-carritos-by-id-usuario/get-carritos-by-id-usuario.handler';
import { GetReservasByIdUsuarioHandler } from './application/queries/get-reservas-by-id-usuario/get-reservas-by-id-usuario.handler';
import { AppDataSource } from './infrastructure/app-data-source';
import { CarritoRepository } from './infrastructure/repositories/carrito.repository';
import { ReservaRepository } from './infrastructure/repositories/reserva.repository';

@Module({
  imports: [CqrsModule],
  controllers: [ReservaController, CarritoController],
  providers: [AppDataSource, ReservaRepository, CarritoRepository,
  GetReservasByIdUsuarioHandler, GetCarritosByIdUsuarioHandler, InsertReservaHandler, InsertCarritoHandler],
})
export class AppModule {}
