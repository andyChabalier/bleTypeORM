import { ChildEntity, Column } from "typeorm";
import { AbstractDeviceCapacities } from "./AbstractDeviceCapacities";
import { IBleDeviceCapacities } from "./interfaces/IBleDeviceCapacities";

@ChildEntity()
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