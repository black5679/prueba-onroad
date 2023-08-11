import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Usuario.Usuario")
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombres: string

    @Column()
    apellidos: string

    @Column()
    correo: string

    @Column()
    celular: string

    @Column()
    dni: string

    @Column()
    fechaNacimiento: Date

    @Column()
    contrasenia: string

    @Column()
    activo: boolean
}