import { IDeviceCapacities } from "./IDeviceCapacities";

export interface IGatewayCapacities extends IDeviceCapacities {
    ipAddress: string;
    project: string;
}