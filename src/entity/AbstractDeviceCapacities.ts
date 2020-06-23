import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IDeviceCapacities } from "./interfaces/IDeviceCapacities";
import { WebviewDevice } from "./WebviewDevice";

@Entity()
export abstract class AbstractDeviceCapacities implements IDeviceCapacities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: null })
    referenceId: number;

    @Column({ default: null })
    type: string;

    @ManyToOne(type => WebviewDevice, abstractDevice => abstractDevice.id)
    @JoinColumn()
    abstractDevice: WebviewDevice;

}