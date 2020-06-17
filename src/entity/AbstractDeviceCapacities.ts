import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { IDeviceCapacities } from "./interfaces/IDeviceCapacities";
import { WebviewDevice } from "./WebviewDevice";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class AbstractDeviceCapacities implements IDeviceCapacities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: null })
    type: string;

    @OneToOne(type => WebviewDevice, abstractDevice => abstractDevice.id, { cascade: false, eager: true })
    @JoinColumn()
    abstractDevice: WebviewDevice;

}