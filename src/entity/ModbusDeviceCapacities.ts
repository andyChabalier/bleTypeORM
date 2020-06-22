import { Column, Entity } from "typeorm";
import { AbstractDeviceCapacities } from "./AbstractDeviceCapacities";
import { IModbusDeviceCapacities } from "./interfaces/IModbusDeviceCapacities";

@Entity()
export class ModbusDeviceCapacities extends AbstractDeviceCapacities implements IModbusDeviceCapacities {

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}