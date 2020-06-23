import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IDeviceAbilities } from "./interfaces/IDeviceAbilities";
import { WebviewDevice } from "./WebviewDevice";

@Entity()
export abstract class AbstractDeviceAbilities implements IDeviceAbilities {

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