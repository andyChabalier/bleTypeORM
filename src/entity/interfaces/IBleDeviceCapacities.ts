import { IDeviceCapacities } from "./IDeviceCapacities";

export interface IBleDeviceCapacities extends IDeviceCapacities {
    pairingStatus: boolean;
    detectedSensorId: number;
    rssi: string;
    macAddress: string;
    sensorType: string;
}