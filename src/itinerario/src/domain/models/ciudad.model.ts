import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("Itinerario.Ciudad")
export class Ciudad {
    @PrimaryColumn()
    id: number

    @Column()
    nombre: string
}