export class GetChatsByIdUsuarioResponse{
    constructor(public readonly id: number,
        public readonly idUsuarioCreacion: number,
        public readonly titulo: string,
        public readonly descripcion: string,
        public readonly imagen: string){}
}