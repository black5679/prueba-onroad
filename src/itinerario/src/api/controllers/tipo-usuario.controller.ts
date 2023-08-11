import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetTiposUsuarioQuery } from 'src/application/queries/get-tipos-usuario/get-tipos-usuario.query';
import { GetTiposUsuarioResponse } from 'src/domain/responses/get-tipos-usuario.response';

@Controller('tipousuario')
export class TipoUsuarioController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async get(): Promise<GetTiposUsuarioResponse[]> {

      const user = await this.queryBus.execute(new GetTiposUsuarioQuery());
  
      return user;
  }
}