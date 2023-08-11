import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Usuario.Mensaje")
export class Mensaje {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idUsuario: number

    @Column()
    idChat: number

    @Column()
    fechaCreacion: Date

    @Column()
    descripcion: string

    @Column()
    activo: boolean
}