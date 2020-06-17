import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class AbstractDevice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}