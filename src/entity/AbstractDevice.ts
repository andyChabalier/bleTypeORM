import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AbstractDeviceCapacities } from "./AbstractDeviceCapacities";

export abstract class AbstractDevice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => AbstractDeviceCapacities, deviceCapacities => deviceCapacities.abstractDevice, {
        cascade: true,
        eager: true
    })
    deviceCapacities: AbstractDeviceCapacities[];
}