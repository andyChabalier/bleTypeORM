import { IDeviceCapacities } from "./IDeviceCapacities";

export interface IModbusDeviceCapacities extends IDeviceCapacities {
    modbusAddress: number;
    ipAddress: string;
}