import { Column, Entity } from "typeorm";
import { AbstractDeviceCapacities } from "./AbstractDeviceCapacities";
import { IBleDeviceCapacities } from "./interfaces/IBleDeviceCapacities";

@Entity()
export class BleDeviceCapacities extends AbstractDeviceCapacities implements IBleDeviceCapacities {
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