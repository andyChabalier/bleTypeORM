import { ChildEntity, Column } from "typeorm";
import { AbstractDeviceCapacities } from "./AbstractDeviceCapacities";
import { IModbusDeviceCapacities } from "./interfaces/IModbusDeviceCapacities";

@ChildEntity()
export class ModbusDeviceCapacities extends AbstractDeviceCapacities implements IModbusDeviceCapacities {

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}