import { IModbusDeviceAbilities } from "./IModbusDeviceAbilities";

export interface IModbusGenericAbilities extends IModbusDeviceAbilities {
    dataEncoding: string;
}