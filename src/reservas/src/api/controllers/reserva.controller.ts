import { Body, Controller, Get, InternalServerErrorException, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { InsertReservaCommand } from 'src/application/commands/insert-reserva/insert-reserva.command';
import { GetReservasByIdUsuarioQuery } from 'src/application/queries/get-reservas-by-id-usuario/get-reservas-by-id-usuario.query';
import { ResponseModel } from 'src/domain/models/response.model';
import { InsertReservaRequest } from 'src/domain/requests/insert-reserva.request';
import { GetReservasByIdUsuarioResponse } from 'src/domain/responses/get-reservas-by-id-usuario.response';

@Controller('reserva')
export class ReservaController {
    constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

    @Get('GetByIdUsuario/:id')
    async get(@Param('id') id: number): Promise<GetReservasByIdUsuarioResponse[]> {
        const reservas = await this.queryBus.execute(new GetReservasByIdUsuarioQuery(id));
    
        return reservas;
    }

    @Post()
    async insert(@Body() request: InsertReservaRequest): Promise<ResponseModel> {
      try {
          const response = await this.commandBus.execute(new InsertReservaCommand(request.idTipoAsiento, request.idAsiento, request.idItinerario, request.idUsuario, request.precioPasaje))
          return response;
      } catch(e){
          throw new InternalServerErrorException();
      }
    }
}