import { IModbusDeviceCapacities } from "./IModbusDeviceCapacities";

export interface IModbusGenericCapacities extends IModbusDeviceCapacities {
    dataEncoding: string;
}