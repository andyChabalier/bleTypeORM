import { Column, Entity } from "typeorm";
import { AbstractDeviceAbilities } from "./AbstractDeviceAbilities";
import { IModbusDeviceAbilities } from "./interfaces/IModbusDeviceAbilities";

@Entity()
export class ModbusDeviceAbilities extends AbstractDeviceAbilities implements IModbusDeviceAbilities {

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}