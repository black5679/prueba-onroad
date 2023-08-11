import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Usuario.Carrito")
export class Carrito {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idUsuario: number

    @Column()
    idAsiento: number

    @Column()
    idItinerario: number

    @Column()
    precioPasaje: number
}