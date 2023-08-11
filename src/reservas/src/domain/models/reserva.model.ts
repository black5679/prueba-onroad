import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Reserva.Reserva")
export class Reserva {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idUsuario: number

    @Column()
    idTipoAsiento: number

    @Column()
    idAsiento: number

    @Column()
    idItinerario: number

    @Column()
    precioPasaje: number

    @Column()
    activo: boolean
}