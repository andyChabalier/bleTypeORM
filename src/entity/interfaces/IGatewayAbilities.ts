import { IDeviceAbilities } from "./IDeviceAbilities";

export interface IGatewayAbilities extends IDeviceAbilities {
    ipAddress: string;
    project: string;
}