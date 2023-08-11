import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("Itinerario.TipoAsiento")
export class TipoAsiento {
    @PrimaryColumn()
    id: number

    @Column()
    nombre: string
}