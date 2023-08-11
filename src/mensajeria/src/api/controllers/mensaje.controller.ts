import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { DeleteMensajeCommand } from 'src/application/commands/delete-mensaje/delete-mensaje.command';
import { InsertMensajeCommand } from 'src/application/commands/insert-mensaje/insert-mensaje.command';
import { UpdateMensajeCommand } from 'src/application/commands/update-mensaje/update-mensaje.command';
import { GetMensajesByIdChatQuery } from 'src/application/queries/get-mensajes-by-id-chat/get-mensajes-by-id-chat.query';
import { ResponseModel } from 'src/domain/models/response.model';
import { InsertMensajeRequest } from 'src/domain/requests/insert-mensaje.request';
import { UpdateMensajeRequest } from 'src/domain/requests/update-mensaje.request';
import { GetMensajesByIdChatResponse } from 'src/domain/responses/get-mensajes-by-id-chat.response';

@Controller('mensaje')
export class MensajeController {
    constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

    @Get('GetByIdChat/:id')
    async get(@Param('id') id: number): Promise<GetMensajesByIdChatResponse[]> {
        try {
            const chats = await this.queryBus.execute(new GetMensajesByIdChatQuery(id));
            return chats;
        } catch(e){
            throw new InternalServerErrorException();
        }
    }

    @Post()
    async insert(@Body() request: InsertMensajeRequest): Promise<ResponseModel> {
      try {
          const response = await this.commandBus.execute(new InsertMensajeCommand(request.idUsuario, request.idChat, request.descripcion))
          return response;
      } catch(e){
        console.log(e)
          throw new InternalServerErrorException();
      }
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() request: UpdateMensajeRequest): Promise<ResponseModel> {
      try {
          const response = await this.commandBus.execute(new UpdateMensajeCommand(id, request.descripcion))
          return response;
      } catch(e){
        console.log(e)
          throw new InternalServerErrorException();
      }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) : Promise<ResponseModel>{
        try {
            const response = await this.commandBus.execute(new DeleteMensajeCommand(id))
            return response;
        } catch(e){
          console.log(e)
            throw new InternalServerErrorException();
        }
    }
}