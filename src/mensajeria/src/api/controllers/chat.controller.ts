import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { DeleteChatCommand } from 'src/application/commands/delete-chat/delete-chat.command';
import { InsertChatCommand } from 'src/application/commands/insert-chat/insert-chat.command';
import { UpdateChatCommand } from 'src/application/commands/update-chat/update-chat.command';
import { GetChatsByIdUsuarioQuery } from 'src/application/queries/get-chats-by-id-usuario/get-chats-by-id-usuario.query';
import { ResponseModel } from 'src/domain/models/response.model';
import { InsertChatRequest } from 'src/domain/requests/insert-chat.request';
import { UpdateChatRequest } from 'src/domain/requests/update-chat.request';
import { GetChatsByIdUsuarioResponse } from 'src/domain/responses/get-chats-by-id-usuario.response';

@Controller('chat')
export class ChatController {
    constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

    @Get('GetByIdUsuario/:id')
    async get(@Param('id') id: number): Promise<GetChatsByIdUsuarioResponse[]> {
        try{
            const chats = await this.queryBus.execute(new GetChatsByIdUsuarioQuery(id));
            return chats;
        } catch (e) {
            throw new InternalServerErrorException();
        }
    }

    
    @Post()
    async insert(@Body() request: InsertChatRequest): Promise<ResponseModel> {
      try {
          const response = await this.commandBus.execute(new InsertChatCommand(request.idUsuarioCreacion, request.titulo, request.descripcion, request.imagen, request.usuarios))
          return response;
      } catch(e){
        console.log(e)
          throw new InternalServerErrorException();
      }
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() request: UpdateChatRequest): Promise<ResponseModel> {
      try {
          const response = await this.commandBus.execute(new UpdateChatCommand(id, request.titulo, request.descripcion, request.imagen))
          return response;
      } catch(e){
        console.log(e)
          throw new InternalServerErrorException();
      }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) : Promise<ResponseModel>{
        try {
            const response = await this.commandBus.execute(new DeleteChatCommand(id))
            return response;
        } catch(e){
          console.log(e)
            throw new InternalServerErrorException();
        }
    }
}