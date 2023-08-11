import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("Usuario.TipoUsuario")
export class TipoUsuario {
    @PrimaryColumn()
    id: number

    @Column()
    nombre: string
}