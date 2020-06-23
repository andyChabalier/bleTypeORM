import { Column, Entity } from "typeorm";
import { AbstractDeviceAbilities } from "./AbstractDeviceAbilities";
import { IBleDeviceAbilities } from "./interfaces/IBleDeviceAbilities";

@Entity()
export class BleDeviceAbilities extends AbstractDeviceAbilities implements IBleDeviceAbilities {
    @Column()
    pairingStatus: boolean;

    @Column()
    detectedSensorId: number;

    @Column()
    rssi: string;

    @Column()
    macAddress: string;

    @Column()
    sensorType: string;
}