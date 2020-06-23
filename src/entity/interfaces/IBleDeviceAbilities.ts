import { IDeviceAbilities } from "./IDeviceAbilities";

export interface IBleDeviceAbilities extends IDeviceAbilities {
    pairingStatus: boolean;
    detectedSensorId: number;
    rssi: string;
    macAddress: string;
    sensorType: string;
}