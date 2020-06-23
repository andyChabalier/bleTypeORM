import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";

export interface IBleDeviceAbilities extends IDeviceAbilities {
    pairingStatus: boolean;
    detectedSensorId: number;
    rssi: string;
    macAddress: string;
    sensorType: string;
}
export interface IDeviceAbilities {
    id: number;
    name: string;
}
export interface IGatewayAbilities extends IDeviceAbilities {
    ipAddress: string;
    project: string;
}
export interface IModbusDeviceAbilities extends IDeviceAbilities {
    modbusAddress: number;
    ipAddress: string;
}
export interface IModbusGenericAbilities extends IModbusDeviceAbilities {
    dataEncoding: string;
}
export abstract class AbstractDevice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
@Entity()
export abstract class AbstractDeviceAbilities implements IDeviceAbilities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: null })
    referenceId: number;

    @Column({ default: null })
    type: string;

    @ManyToOne(type => WebviewDevice, abstractDevice => abstractDevice.id, { eager: true })
    @JoinColumn()
    abstractDevice: WebviewDevice;

}
@Entity()
export class WebviewDevice extends AbstractDevice {

    @Column()
    localisation: string;

    @Column()
    line: string;

    @Column()
    netId: string;

    @Column()
    networkType: string;
}
@Entity()
export class ModbusDeviceAbilities extends AbstractDeviceAbilities implements IModbusDeviceAbilities {

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}
@Entity()
export class BleDeviceAbilities extends AbstractDeviceAbilities implements IBleDeviceAbilities {
    @Column()
    pairingStatus: boolean;

    @Column()
    detectedSensorId: number;

    @Column()
    rssi: string;

    @Column()
    macAddress: string;

    @Column()
    sensorType: string;
}
@Entity()
export class ModbusGenericDeviceAbilities extends AbstractDeviceAbilities implements IModbusGenericAbilities {

    @Column()
    dataEncoding: string;

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}