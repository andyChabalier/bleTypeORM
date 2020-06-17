import { createConnection } from "typeorm";
import { AbstractDevice } from "./entity/AbstractDevice";
import { AbstractDeviceCapacities } from "./entity/AbstractDeviceCapacities";
import { BleDeviceCapacities } from "./entity/BleDeviceCapacities";
import { ModbusDeviceCapacities } from "./entity/ModbusDeviceCapacities";
import { ModbusGenericDeviceCapacities } from "./entity/ModbusGenericDeviceCapacities";
import { WebviewDevice } from "./entity/WebviewDevice";
import { SmartDeviceCapacitiesRepository } from "./repository/SmartDeviceCapacitiesRepository";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {
    try {
        const webviewDeviceRepository = connection.getRepository(WebviewDevice);
        const abstractDeviceCapacitiesRepository = connection.getCustomRepository(SmartDeviceCapacitiesRepository);
        const bleDeviceCapacitiesRepository = connection.getRepository(BleDeviceCapacities);
        const modbusDeviceCapacitiesRepository = connection.getRepository(ModbusDeviceCapacities);
        const modbusGenericDeviceCapacitiesRepository = connection.getRepository(ModbusGenericDeviceCapacities);

        ///////////////////////BLE device////////////////////////////
        let bleDevice: WebviewDevice = new WebviewDevice();
        bleDevice.line = "line1";
        bleDevice.localisation = "local1";
        bleDevice.name = "BLE1";
        bleDevice.netId = "FFFFFFF";
        bleDevice.networkType = "3P+N";
        bleDevice = await webviewDeviceRepository.save(bleDevice);

        console.log("Device has been saved: ", bleDevice);

        const bleCapacities = new BleDeviceCapacities();
        bleCapacities.name = "bleCapacities";
        bleCapacities.detectedSensorId = 1;
        bleCapacities.macAddress = "FF:FF:FF:FF:FF:FF";
        bleCapacities.pairingStatus = true;
        bleCapacities.rssi = "1111111";
        bleCapacities.sensorType = "heat";
        bleCapacities.abstractDevice = bleDevice;
        await abstractDeviceCapacitiesRepository.createAndSave(bleCapacities, BleDeviceCapacities);

        console.log("DeviceCapacities has been saved: ", bleCapacities);

        /////////////////////Modbus device////////////////////////////

        let modbusDevice: WebviewDevice = new WebviewDevice();
        modbusDevice.line = "line2";
        modbusDevice.localisation = "local2";
        modbusDevice.name = "Modbus1";
        modbusDevice.netId = "AAAAAAA";
        modbusDevice.networkType = "2P+N";
        modbusDevice = await webviewDeviceRepository.save(modbusDevice);

        console.log("Device has been saved: ", modbusDevice);

        const modbusCapacities = new ModbusDeviceCapacities();
        modbusCapacities.name = "bleCapacities";
        modbusCapacities.ipAddress = "0.0.0.0";
        modbusCapacities.modbusAddress = 255;
        modbusCapacities.abstractDevice = modbusDevice;
        await abstractDeviceCapacitiesRepository.createAndSave(modbusCapacities, ModbusDeviceCapacities);

        console.log("DeviceCapacities has been saved: ", modbusCapacities);

        let modbusDevice2: WebviewDevice = new WebviewDevice();
        modbusDevice2.line = "line22";
        modbusDevice2.localisation = "local22";
        modbusDevice2.name = "Modbus2";
        modbusDevice2.netId = "CCCCCCC";
        modbusDevice2.networkType = "2P+N";
        modbusDevice2 = await webviewDeviceRepository.save(modbusDevice2);

        console.log("Device has been saved: ", modbusDevice2);

        const modbusCapacities2 = new ModbusDeviceCapacities();
        modbusCapacities2.name = "modbusCapacities";
        modbusCapacities2.ipAddress = "0.0.0.0";
        modbusCapacities2.modbusAddress = 255;
        modbusCapacities2.abstractDevice = modbusDevice2;
        await abstractDeviceCapacitiesRepository.createAndSave(modbusCapacities2, ModbusDeviceCapacities);

        console.log("DeviceCapacities has been saved: ", modbusCapacities2);


        ///////////////////Modbus Generic device//////////////////////////

        let modbusGenericDevice: WebviewDevice = new WebviewDevice();
        modbusGenericDevice.line = "line3";
        modbusGenericDevice.localisation = "local3";
        modbusGenericDevice.name = "ModbusGeneric1";
        modbusGenericDevice.netId = "BBBBBBBB";
        modbusGenericDevice.networkType = "3P";
        modbusGenericDevice = await webviewDeviceRepository.save(modbusGenericDevice);

        console.log("Device has been saved: ", modbusGenericDevice);

        const modbusGenericCapacities = new ModbusGenericDeviceCapacities();
        modbusGenericCapacities.name = "modbusGenericCapacities";
        modbusGenericCapacities.ipAddress = "0.0.0.0";
        modbusGenericCapacities.modbusAddress = 255;
        modbusGenericCapacities.abstractDevice = modbusGenericDevice;
        modbusGenericCapacities.dataEncoding = "inversion";
        await abstractDeviceCapacitiesRepository.createAndSave(modbusGenericCapacities, ModbusGenericDeviceCapacities);

        console.log("DeviceCapacities has been saved: ", modbusGenericCapacities);

        ///////////////////Modbus BLE device//////////////////////////

        let modbusBleDevice: WebviewDevice = new WebviewDevice();
        modbusBleDevice.line = "line4";
        modbusBleDevice.localisation = "local4";
        modbusBleDevice.name = "ModbusBle1";
        modbusBleDevice.netId = "BBBBBBBB";
        modbusBleDevice.networkType = "3P";
        modbusBleDevice = await webviewDeviceRepository.save(modbusBleDevice);

        console.log("Device has been saved: ", modbusBleDevice);

        const modbusCapacitiesForBleModbus = new ModbusDeviceCapacities();
        modbusCapacitiesForBleModbus.name = "modbusForBleModbusCapacities";
        modbusCapacitiesForBleModbus.ipAddress = "0.0.0.0";
        modbusCapacitiesForBleModbus.modbusAddress = 255;
        modbusCapacitiesForBleModbus.abstractDevice = modbusBleDevice;
        await abstractDeviceCapacitiesRepository.createAndSave(modbusCapacitiesForBleModbus, ModbusDeviceCapacities);

        console.log("DeviceCapacities has been saved: ", modbusCapacitiesForBleModbus);

        // const bleCapacitiesForBleModbus = new BleDeviceCapacities();
        // bleCapacitiesForBleModbus.name = "bleCapacitiesForBleModbus";
        // bleCapacitiesForBleModbus.detectedSensorId = 1;
        // bleCapacitiesForBleModbus.macAddress = "FF:FF:FF:FF:FF:FF";
        // bleCapacitiesForBleModbus.pairingStatus = true;
        // bleCapacitiesForBleModbus.rssi = "1111111";
        // bleCapacitiesForBleModbus.sensorType = "heat";
        // bleCapacitiesForBleModbus.abstractDevice = modbusBleDevice;
        // await abstractDeviceCapacitiesRepository.createAndSave(bleCapacitiesForBleModbus, BleDeviceCapacities);

        // console.log("DeviceCapacities has been saved: ", bleCapacitiesForBleModbus);

        //////////////////////REQUESTS//////////////////////////////////

        console.log("//////////////////////Requesting WebviewDevice//////////////////////");
        await webviewDeviceRepository
            .find()
            .then(async result => {
                result.forEach(async (device: AbstractDevice) => {
                    console.log(device);
                    const capacities: AbstractDeviceCapacities[] = await abstractDeviceCapacitiesRepository.findByAbstractDevice(device);
                    console.log("capacities of device ", device.id, ":", capacities);
                });
            });

        console.log("//////////////////////Requesting AbstractDeviceCapacities//////////////////////");
        await abstractDeviceCapacitiesRepository
            .find()
            .then(result => {
                console.log(result);
            });

        console.log("//////////////////////Requesting BleDeviceCapacities//////////////////////");
        await bleDeviceCapacitiesRepository
            .find()
            .then(result => {
                console.log(result);
            });

        console.log("//////////////////////Requesting ModbusDeviceCapacities//////////////////////");
        await modbusDeviceCapacitiesRepository
            .find()
            .then(result => {
                console.log(result);
            });

        console.log("//////////////////////Requesting ModbusGenericDeviceCapacities//////////////////////");
        await modbusGenericDeviceCapacitiesRepository
            .find()
            .then(result => {
                console.log(result);
            });

    } catch (error) {
        console.log(error);
        console.error(error);
    }
    finally {
        connection.close();
    }
});