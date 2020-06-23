import { createConnection } from "typeorm";
import { AbstractDevice } from "./entity/AbstractDevice";
import { AbstractDeviceAbilities } from "./entity/AbstractDeviceAbilities";
import { BleDeviceAbilities } from "./entity/BleDeviceAbilities";
import { ModbusDeviceAbilities } from "./entity/ModbusDeviceAbilities";
import { ModbusGenericDeviceAbilities } from "./entity/ModbusGenericDeviceAbilities";
import { WebviewDevice } from "./entity/WebviewDevice";
import { SmartDeviceAbilitiesRepository } from "./repository/SmartDeviceAbilitiesRepository";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {
    try {
        const webviewDeviceRepository = connection.getRepository(WebviewDevice);
        const abstractDeviceAbilitiesRepository = connection.getCustomRepository(SmartDeviceAbilitiesRepository);
        const bleDeviceAbilitiesRepository = connection.getRepository(BleDeviceAbilities);
        const modbusDeviceAbilitiesRepository = connection.getRepository(ModbusDeviceAbilities);
        const modbusGenericDeviceAbilitiesRepository = connection.getRepository(ModbusGenericDeviceAbilities);

        /////////////////////BLE device////////////////////////////
        let bleDevice: WebviewDevice = new WebviewDevice();
        bleDevice.line = "line1";
        bleDevice.localisation = "local1";
        bleDevice.name = "BLE1";
        bleDevice.netId = "FFFFFFF";
        bleDevice.networkType = "3P+N";
        bleDevice = await webviewDeviceRepository.save(bleDevice);

        //console.log("Device has been saved: ", bleDevice);

        const bleAbilities = new BleDeviceAbilities();
        bleAbilities.name = "bleAbilities";
        bleAbilities.detectedSensorId = 1;
        bleAbilities.macAddress = "FF:FF:FF:FF:FF:FF";
        bleAbilities.pairingStatus = true;
        bleAbilities.rssi = "1111111";
        bleAbilities.sensorType = "heat";
        bleAbilities.abstractDevice = bleDevice;
        await abstractDeviceAbilitiesRepository.createAndSave(bleAbilities, BleDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", bleAbilities);

        let bleDevice2: WebviewDevice = new WebviewDevice();
        bleDevice2.line = "line2";
        bleDevice2.localisation = "local2";
        bleDevice2.name = "BLE2";
        bleDevice2.netId = "FFFFFFF";
        bleDevice2.networkType = "3P+N";
        bleDevice2 = await webviewDeviceRepository.save(bleDevice2);

        //console.log("Device has been saved: ", bleDevice2);

        const bleAbilities2 = new BleDeviceAbilities();
        bleAbilities2.name = "bleAbilities";
        bleAbilities2.detectedSensorId = 2;
        bleAbilities2.macAddress = "FF:FF:FF:FF:FF:FF";
        bleAbilities2.pairingStatus = true;
        bleAbilities2.rssi = "1111111";
        bleAbilities2.sensorType = "heat";
        bleAbilities2.abstractDevice = bleDevice2;
        await abstractDeviceAbilitiesRepository.createAndSave(bleAbilities2, BleDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", bleAbilities2);

        ///////////////////Modbus device////////////////////////////

        let modbusDevice: WebviewDevice = new WebviewDevice();
        modbusDevice.line = "line2";
        modbusDevice.localisation = "local2";
        modbusDevice.name = "Modbus1";
        modbusDevice.netId = "AAAAAAA";
        modbusDevice.networkType = "2P+N";
        modbusDevice = await webviewDeviceRepository.save(modbusDevice);

        //console.log("Device has been saved: ", modbusDevice);

        const modbusAbilities = new ModbusDeviceAbilities();
        modbusAbilities.name = "modbusAbilities";
        modbusAbilities.ipAddress = "0.0.0.0";
        modbusAbilities.modbusAddress = 255;
        modbusAbilities.abstractDevice = modbusDevice;
        await abstractDeviceAbilitiesRepository.createAndSave(modbusAbilities, ModbusDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", modbusAbilities);

        let modbusDevice2: WebviewDevice = new WebviewDevice();
        modbusDevice2.line = "line22";
        modbusDevice2.localisation = "local22";
        modbusDevice2.name = "Modbus2";
        modbusDevice2.netId = "CCCCCCC";
        modbusDevice2.networkType = "2P+N";
        modbusDevice2 = await webviewDeviceRepository.save(modbusDevice2);

        //console.log("Device has been saved: ", modbusDevice2);

        const modbusAbilities2 = new ModbusDeviceAbilities();
        modbusAbilities2.name = "modbusAbilities2";
        modbusAbilities2.ipAddress = "0.0.0.0";
        modbusAbilities2.modbusAddress = 255;
        modbusAbilities2.abstractDevice = modbusDevice2;
        await abstractDeviceAbilitiesRepository.createAndSave(modbusAbilities2, ModbusDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", modbusAbilities2);

        let modbusDevice3: WebviewDevice = new WebviewDevice();
        modbusDevice3.line = "line23";
        modbusDevice3.localisation = "local23";
        modbusDevice3.name = "Modbus3";
        modbusDevice3.netId = "CCCCCCC";
        modbusDevice3.networkType = "2P+N";
        modbusDevice3 = await webviewDeviceRepository.save(modbusDevice3);

        //console.log("Device has been saved: ", modbusDevice3);

        const modbusAbilities3 = new ModbusDeviceAbilities();
        modbusAbilities3.name = "modbusAbilities3";
        modbusAbilities3.ipAddress = "0.0.0.0";
        modbusAbilities3.modbusAddress = 255;
        modbusAbilities3.abstractDevice = modbusDevice3;
        await abstractDeviceAbilitiesRepository.createAndSave(modbusAbilities3, ModbusDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", modbusAbilities3);


        ///////////////////Modbus Generic device//////////////////////////

        let modbusGenericDevice: WebviewDevice = new WebviewDevice();
        modbusGenericDevice.line = "line3";
        modbusGenericDevice.localisation = "local3";
        modbusGenericDevice.name = "ModbusGeneric1";
        modbusGenericDevice.netId = "BBBBBBBB";
        modbusGenericDevice.networkType = "3P";
        modbusGenericDevice = await webviewDeviceRepository.save(modbusGenericDevice);

        //console.log("Device has been saved: ", modbusGenericDevice);

        const modbusGenericAbilities = new ModbusGenericDeviceAbilities();
        modbusGenericAbilities.name = "modbusGenericAbilities";
        modbusGenericAbilities.ipAddress = "0.0.0.0";
        modbusGenericAbilities.modbusAddress = 255;
        modbusGenericAbilities.abstractDevice = modbusGenericDevice;
        modbusGenericAbilities.dataEncoding = "inversion";
        await abstractDeviceAbilitiesRepository.createAndSave(modbusGenericAbilities, ModbusGenericDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", modbusGenericAbilities);

        ///////////////////Modbus BLE device//////////////////////////

        let modbusBleDevice: WebviewDevice = new WebviewDevice();
        modbusBleDevice.line = "line4";
        modbusBleDevice.localisation = "local4";
        modbusBleDevice.name = "ModbusBle1";
        modbusBleDevice.netId = "BBBBBBBB";
        modbusBleDevice.networkType = "3P";
        modbusBleDevice = await webviewDeviceRepository.save(modbusBleDevice);

        //console.log("Device has been saved: ", modbusBleDevice);

        const modbusAbilitiesForBleModbus = new ModbusDeviceAbilities();
        modbusAbilitiesForBleModbus.name = "modbusForBleModbusAbilities";
        modbusAbilitiesForBleModbus.ipAddress = "0.0.0.0";
        modbusAbilitiesForBleModbus.modbusAddress = 255;
        modbusAbilitiesForBleModbus.abstractDevice = modbusBleDevice;
        await abstractDeviceAbilitiesRepository.createAndSave(modbusAbilitiesForBleModbus, ModbusDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", modbusAbilitiesForBleModbus);

        const bleAbilitiesForBleModbus = new BleDeviceAbilities();
        bleAbilitiesForBleModbus.name = "bleAbilitiesForBleModbus";
        bleAbilitiesForBleModbus.detectedSensorId = 1;
        bleAbilitiesForBleModbus.macAddress = "FF:FF:FF:FF:FF:FF";
        bleAbilitiesForBleModbus.pairingStatus = true;
        bleAbilitiesForBleModbus.rssi = "1111111";
        bleAbilitiesForBleModbus.sensorType = "heat";
        bleAbilitiesForBleModbus.abstractDevice = modbusBleDevice;
        await abstractDeviceAbilitiesRepository.createAndSave(bleAbilitiesForBleModbus, BleDeviceAbilities);

        //console.log("DeviceAbilities has been saved: ", bleAbilitiesForBleModbus);

        //////////////////////REQUESTS//////////////////////////////////

        //console.log("//////////////////////Requesting WebviewDevice//////////////////////");
        await webviewDeviceRepository
            .find()
            .then(async result => {
                result.forEach(async (device: AbstractDevice) => {
                    //console.log(device);
                    const abilities: AbstractDeviceAbilities[] = await abstractDeviceAbilitiesRepository.findByAbstractDevice(device);
                    console.log("abilities of device ", device.id, ":", abilities);
                });
            });

        //console.log("//////////////////////Requesting AbstractDeviceAbilities//////////////////////");
        await abstractDeviceAbilitiesRepository
            .find()
            .then(result => {
                //console.log(result);
            });

        //console.log("//////////////////////Requesting BleDeviceAbilities//////////////////////");
        await bleDeviceAbilitiesRepository
            .find()
            .then(result => {
                //console.log(result);
            });

        //console.log("//////////////////////Requesting ModbusDeviceAbilities//////////////////////");
        await modbusDeviceAbilitiesRepository
            .find()
            .then(result => {
                //console.log(result);
            });

        //console.log("//////////////////////Requesting ModbusGenericDeviceAbilities//////////////////////");
        await modbusGenericDeviceAbilitiesRepository
            .find()
            .then(result => {
                //console.log(result);
            });

    } catch (error) {
        //console.log(error);
        console.error(error);
    }
    finally {
        connection.close();
    }
});