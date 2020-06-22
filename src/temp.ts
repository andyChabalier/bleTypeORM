import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";

export interface IBleDeviceCapacities extends IDeviceCapacities {
    pairingStatus: boolean;
    detectedSensorId: number;
    rssi: string;
    macAddress: string;
    sensorType: string;
}
export interface IDeviceCapacities {
    id: number;
    name: string;
}
export interface IGatewayCapacities extends IDeviceCapacities {
    ipAddress: string;
    project: string;
}
export interface IModbusDeviceCapacities extends IDeviceCapacities {
    modbusAddress: number;
    ipAddress: string;
}
export interface IModbusGenericCapacities extends IModbusDeviceCapacities {
    dataEncoding: string;
}
export abstract class AbstractDevice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
@Entity()
export abstract class AbstractDeviceCapacities implements IDeviceCapacities {

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
export class ModbusDeviceCapacities extends AbstractDeviceCapacities implements IModbusDeviceCapacities {

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}
@Entity()
export class BleDeviceCapacities extends AbstractDeviceCapacities implements IBleDeviceCapacities {
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
export class ModbusGenericDeviceCapacities extends AbstractDeviceCapacities implements IModbusGenericCapacities {

    @Column()
    dataEncoding: string;

    @Column()
    modbusAddress: number;

    @Column()
    ipAddress: string;
}