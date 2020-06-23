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
    referencedCapacityId: number;

    @Column({ default: null })
    referencedCapacityType: string;

    @ManyToOne(type => WebviewDevice, linkedDevice => linkedDevice.id)
    @JoinColumn()
    linkedDevice: WebviewDevice;

}