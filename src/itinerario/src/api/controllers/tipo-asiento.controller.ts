import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetTiposAsientoQuery } from 'src/application/queries/get-tipos-asiento/get-tipos-asiento.query';
import { GetTiposAsientoResponse } from 'src/domain/responses/get-tipos-asiento.response';

@Controller('tipoasiento')
export class TipoAsientoController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async get(): Promise<GetTiposAsientoResponse[]> {

      const user = await this.queryBus.execute(new GetTiposAsientoQuery());
  
      return user;
  }
}