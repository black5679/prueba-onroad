import { Body, Controller, Delete, InternalServerErrorException, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { DeleteUsuarioChatCommand } from 'src/application/commands/delete-usuario-chat/delete-usuario-chat.command';
import { InsertUsuarioChatCommand } from 'src/application/commands/insert-usuario-chat/insert-usuario-chat.command';
import { ResponseModel } from 'src/domain/models/response.model';
import { InsertUsuarioChatRequest } from 'src/domain/requests/insert-usuario-chat.request';

@Controller('usuariochat')
export class UsuarioChatController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    async insert(@Body() request: InsertUsuarioChatRequest): Promise<ResponseModel> {
      try {
          const response = await this.commandBus.execute(new InsertUsuarioChatCommand(request.idChat, request.usuarios))
          return response;
      } catch(e){
        console.log(e)
          throw new InternalServerErrorException();
      }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) : Promise<ResponseModel>{
        try {
            const response = await this.commandBus.execute(new DeleteUsuarioChatCommand(id))
            return response;
        } catch(e){
          console.log(e)
            throw new InternalServerErrorException();
        }
    }
}