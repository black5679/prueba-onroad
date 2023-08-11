import { Body, Controller, Get, InternalServerErrorException, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { InsertCarritoCommand } from 'src/application/commands/insert-carrito/insert-carrito.command';
import { GetCarritosByIdUsuarioQuery } from 'src/application/queries/get-carritos-by-id-usuario/get-carritos-by-id-usuario.query';
import { ResponseModel } from 'src/domain/models/response.model';
import { InsertCarritoRequest } from 'src/domain/requests/insert-carrito.request';
import { GetCarritosByIdUsuarioResponse } from 'src/domain/responses/get-carritos-by-id-usuario.response';

@Controller('carrito')
export class CarritoController {
    constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

    @Get('GetByIdUsuario/:id')
    async get(@Param('id') id: number): Promise<GetCarritosByIdUsuarioResponse[]> {
        const reservas = await this.queryBus.execute(new GetCarritosByIdUsuarioQuery(id));
    
        return reservas;
    }

    @Post()
    async insert(@Body() request: InsertCarritoRequest): Promise<ResponseModel> {
      try {
          const response = await this.commandBus.execute(new InsertCarritoCommand(request.precioPasaje, request.idAsiento, request.idItinerario, request.idUsuario))
          return response;
      } catch(e){
          throw new InternalServerErrorException();
      }
    }
}