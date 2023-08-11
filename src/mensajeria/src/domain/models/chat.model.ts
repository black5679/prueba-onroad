import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from "typeorm"
import { Usuario } from "./usuario.model"

@Entity("Usuario.Chat")
export class Chat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idUsuarioCreacion: number

    @Column()
    titulo: string

    @Column()
    descripcion: string

    @Column()
    imagen: string

    @Column()
    activo: boolean
}