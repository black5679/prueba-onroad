import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Itinerario.Itinerario")
export class Itinerario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idCiudadOrigen: number

    @Column()
    idCiudadDestino: number

    @Column()
    horaSalida: Date

    @Column()
    horaLlegada: Date

    @Column()
    precioPasaje: number

    @Column()
    idBus: number

    @Column()
    activo: boolean
}