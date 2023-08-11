import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Usuario.UsuarioChat")
export class UsuarioChat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idUsuario: number

    @Column()
    idChat: number

    @Column()
    activo: boolean
}