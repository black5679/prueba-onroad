export class GetMensajesByIdChatResponse{
    constructor(public readonly id: number,
        public readonly idUsuario: number,
        public readonly idChat: number,
        public readonly fechaCreacion: Date,
        public readonly descripcion: string){}
}