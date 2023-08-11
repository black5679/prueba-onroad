import { Body, Controller, InternalServerErrorException, Param, Post, Put } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { InsertItinerarioCommand } from "src/application/commands/insert-itinerario/insert-itinerario.command";
import { UpdateItinerarioCommand } from "src/application/commands/update-itinerario/update-itinerario.command";
import { ResponseModel } from "src/domain/models/response.model";
import { InsertItinerarioRequest } from "src/domain/requests/insert-itinerario.request";
import { UpdateItinerarioRequest } from "src/domain/requests/update-itinerario.request";

@Controller('itinerario')
export class ItinerarioController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async insert(@Body() request: InsertItinerarioRequest): Promise<ResponseModel> {
    try {
        const response = await this.commandBus.execute(new InsertItinerarioCommand(request.idCiudadOrigen, request.idCiudadDestino, request.horaSalida, request.horaLlegada, request.precioPasaje, request.idBus))
        return response;
    } catch(e){
        throw new InternalServerErrorException();
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() request: UpdateItinerarioRequest): Promise<ResponseModel> {
    try {
        const response = await this.commandBus.execute(new UpdateItinerarioCommand(id, request.idCiudadOrigen, request.idCiudadDestino, request.horaSalida, request.horaLlegada, request.precioPasaje, request.idBus))
        return response;
    } catch(e){
        throw new InternalServerErrorException();
    }
  }
}