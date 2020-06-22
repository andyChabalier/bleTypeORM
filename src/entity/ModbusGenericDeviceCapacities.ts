import { Column, Entity } from "typeorm";
import { AbstractDeviceCapacities } from "./AbstractDeviceCapacities";
import { IModbusGenericCapacities } from "./interfaces/IModbusGenericCapacities";

@Entity()
export class ModbusGenericDeviceCapacities extends AbstractDeviceCapacities implements IModbusGenericCapacities {

    @Column()
    dataEncoding: string;

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}