import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Itinerario.Asiento")
export class Asiento {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idTipoAsiento: number

    @Column()
    idBus: number
}