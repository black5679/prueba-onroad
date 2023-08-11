import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { DeleteBusCommand } from "src/application/commands/delete-bus/delete-bus.command";
import { InsertBusCommand } from "src/application/commands/insert-bus/insert-bus.command";
import { UpdateBusCommand } from "src/application/commands/update-bus/update-bus.command";
import { GetBusByIdQuery } from "src/application/queries/get-bus-by-id/get-bus-by-id.query";
import { GetBusesQuery } from "src/application/queries/get-buses/get-buses.query";
import { ResponseModel } from "src/domain/models/response.model";
import { InsertBusRequest } from "src/domain/requests/insert-bus.request";
import { UpdateBusRequest } from "src/domain/requests/update-bus.request";
import { GetBusByIdResponse } from "src/domain/responses/get-bus-by-id.response";
import { GetBusesResponse } from "src/domain/responses/get-buses.response";

@Controller('bus')
export class BusController {
  constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

  @Get()
  async get(): Promise<GetBusesResponse[]> {
    try {
        const response = await this.queryBus.execute(new GetBusesQuery());
        return response;
    } catch (e){
        throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<GetBusByIdResponse> {
    try {
        const response = await this.queryBus.execute(new GetBusByIdQuery(id));
        return response;
    } catch (e){
        throw new InternalServerErrorException();
    }
  }

  @Post()
  async insert(@Body() request: InsertBusRequest): Promise<ResponseModel> {
    try {
        const response = await this.commandBus.execute(new InsertBusCommand(request.placa, request.operadora, request.asientos))
        return response;
    } catch(e){
        throw new InternalServerErrorException();
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() request: UpdateBusRequest): Promise<ResponseModel> {
    try {
        const response = await this.commandBus.execute(new UpdateBusCommand(id, request.placa, request.operadora))
        return response;
    } catch(e){
        throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<ResponseModel> {
    try {
        const response = await this.commandBus.execute(new DeleteBusCommand(id))
        return response;
    } catch(e){
        throw new InternalServerErrorException();
    }
  }
}