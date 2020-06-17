import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { IDeviceCapacities } from "./interfaces/IDeviceCapacities";
import { WebviewDevice } from "./WebviewDevice";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class AbstractDeviceCapacities implements IDeviceCapacities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => WebviewDevice, abstractDevice => abstractDevice.deviceCapacities)
    abstractDevice: WebviewDevice;
}