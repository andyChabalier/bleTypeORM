import { Column, Entity } from "typeorm";
import { AbstractDeviceAbilities } from "./AbstractDeviceAbilities";
import { IModbusGenericAbilities } from "./interfaces/IModbusGenericAbilities";

@Entity()
export class ModbusGenericDeviceAbilities extends AbstractDeviceAbilities implements IModbusGenericAbilities {

    @Column()
    dataEncoding: string;

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}