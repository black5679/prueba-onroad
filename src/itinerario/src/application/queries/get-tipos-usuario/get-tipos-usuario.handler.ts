import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetTiposUsuarioResponse } from "src/domain/responses/get-tipos-usuario.response";
import { TipoUsuarioRepository } from "src/infrastructure/repositories/tipo-usuario.repository";
import { GetTiposUsuarioQuery } from "./get-tipos-usuario.query";

@QueryHandler(GetTiposUsuarioQuery)
export class GetTiposUsuarioHandler implements IQueryHandler<GetTiposUsuarioQuery, GetTiposUsuarioResponse[]> {
  constructor(private readonly repository: TipoUsuarioRepository) {}

  async execute() : Promise<GetTiposUsuarioResponse[]> {
    const tipoUsuarios = await this.repository.get();
    let response : GetTiposUsuarioResponse[] = [];
    tipoUsuarios.forEach(element => {
      const getTipoUsuarioResponse = new GetTiposUsuarioResponse(element.id, element.nombre);
      response.push(getTipoUsuarioResponse);
    });
    return response;
  }
}