import { IDeviceAbilities } from "./IDeviceAbilities";

export interface IModbusDeviceAbilities extends IDeviceAbilities {
    modbusAddress: number;
    ipAddress: string;
}