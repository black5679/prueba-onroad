import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("Itinerario.Bus")
export class Bus {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    placa: string

    @Column()
    operadora: string

    @Column()
    activo: boolean
}