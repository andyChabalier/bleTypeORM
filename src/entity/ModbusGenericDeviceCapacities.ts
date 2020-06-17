import { ChildEntity, Column } from "typeorm";
import { AbstractDeviceCapacities } from "./AbstractDeviceCapacities";
import { IModbusGenericCapacities } from "./interfaces/IModbusGenericCapacities";

@ChildEntity()
export class ModbusGenericDeviceCapacities extends AbstractDeviceCapacities implements IModbusGenericCapacities {

    @Column()
    dataEncoding: string;

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}