import { createConnection } from "typeorm";
import { AbstractDeviceCapacities } from "./entity/AbstractDeviceCapacities";
import { BleDeviceCapacities } from "./entity/BleDeviceCapacities";
import { ModbusDeviceCapacities } from "./entity/ModbusDeviceCapacities";
import { ModbusGenericDeviceCapacities } from "./entity/ModbusGenericDeviceCapacities";
import { WebviewDevice } from "./entity/WebviewDevice";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {
    try {
        const webviewDeviceRepository = connection.getRepository(WebviewDevice);
        const abstractDeviceCapacitiesRepository = connection.getRepository(AbstractDeviceCapacities);
        const bleDeviceCapacitiesRepository = connection.getRepository(BleDeviceCapacities);
        const modbusDeviceCapacitiesRepository = connection.getRepository(ModbusDeviceCapacities);
        const modbusGenericDeviceCapacitiesRepository = connection.getRepository(ModbusGenericDeviceCapacities);

        webviewDeviceRepository.clear();
        abstractDeviceCapacitiesRepository.clear();
        bleDeviceCapacitiesRepository.clear();
        modbusDeviceCapacitiesRepository.clear();
        modbusGenericDeviceCapacitiesRepository.clear();

        console.log("table cleared");


        ///////////////////////BLE device////////////////////////////
        const bleCapacities = new BleDeviceCapacities();
        bleCapacities.name = "bleCapacities";
        bleCapacities.detectedSensorId = 1;
        bleCapacities.macAddress = "FF:FF:FF:FF:FF:FF";
        bleCapacities.pairingStatus = true;
        bleCapacities.rssi = "1111111";
        bleCapacities.sensorType = "heat";

        console.log("DeviceCapacities has been saved: ", bleCapacities);

        const bleDevice: WebviewDevice = new WebviewDevice();
        bleDevice.line = "line1";
        bleDevice.localisation = "local1";
        bleDevice.name = "BLE1";
        bleDevice.netId = "FFFFFFF";
        bleDevice.networkType = "3P+N";
        bleDevice.deviceCapacities = [bleCapacities];
        await webviewDeviceRepository.save(bleDevice);

        console.log("Device has been saved: ", bleDevice);

        /////////////////////Modbus device////////////////////////////

        const modbusCapacities = new ModbusDeviceCapacities();
        modbusCapacities.name = "bleCapacities";
        modbusCapacities.ipAddress = "0.0.0.0";
        modbusCapacities.modbusAddress = 255;

        const modbusDevice: WebviewDevice = new WebviewDevice();
        modbusDevice.line = "line2";
        modbusDevice.localisation = "local2";
        modbusDevice.name = "Modbus1";
        modbusDevice.netId = "AAAAAAA";
        modbusDevice.networkType = "2P+N";
        modbusDevice.deviceCapacities = [modbusCapacities];
        await webviewDeviceRepository.save(modbusDevice);

        console.log("Device has been saved: ", modbusDevice);

        const modbusCapacities2 = new ModbusDeviceCapacities();
        modbusCapacities2.name = "modbusCapacities";
        modbusCapacities2.ipAddress = "0.0.0.0";
        modbusCapacities2.modbusAddress = 255;

        const modbusDevice2: WebviewDevice = new WebviewDevice();
        modbusDevice2.line = "line22";
        modbusDevice2.localisation = "local22";
        modbusDevice2.name = "Modbus2";
        modbusDevice2.netId = "CCCCCCC";
        modbusDevice2.networkType = "2P+N";
        modbusDevice2.deviceCapacities = [modbusCapacities2];
        await webviewDeviceRepository.save(modbusDevice2);

        console.log("Device has been saved: ", modbusDevice2);

        ///////////////////Modbus Generic device//////////////////////////

        const modbusGenericCapacities = new ModbusDeviceCapacities();
        modbusGenericCapacities.name = "modbusGenericCapacities";
        modbusGenericCapacities.ipAddress = "0.0.0.0";
        modbusGenericCapacities.modbusAddress = 255;

        const modbusGenericDevice: WebviewDevice = new WebviewDevice();
        modbusGenericDevice.line = "line3";
        modbusGenericDevice.localisation = "local3";
        modbusGenericDevice.name = "ModbusGeneric1";
        modbusGenericDevice.netId = "BBBBBBBB";
        modbusGenericDevice.networkType = "3P";
        modbusGenericDevice.deviceCapacities = [modbusGenericCapacities];
        await webviewDeviceRepository.save(modbusGenericDevice);

        console.log("Device has been saved: ", modbusGenericDevice);

        ///////////////////Modbus BLE device//////////////////////////

        const modbusCapacitiesForBleModbus = new ModbusDeviceCapacities();
        modbusCapacitiesForBleModbus.name = "modbusForBleModbusCapacities";
        modbusCapacitiesForBleModbus.ipAddress = "0.0.0.0";
        modbusCapacitiesForBleModbus.modbusAddress = 255;

        const bleCapacitiesForBleModbus = new BleDeviceCapacities();
        bleCapacitiesForBleModbus.name = "bleCapacitiesForBleModubs";
        bleCapacitiesForBleModbus.detectedSensorId = 1;
        bleCapacitiesForBleModbus.macAddress = "FF:FF:FF:FF:FF:FF";
        bleCapacitiesForBleModbus.pairingStatus = true;
        bleCapacitiesForBleModbus.rssi = "1111111";
        bleCapacitiesForBleModbus.sensorType = "heat";

        const modbusBleDevice: WebviewDevice = new WebviewDevice();
        modbusBleDevice.line = "line4";
        modbusBleDevice.localisation = "local4";
        modbusBleDevice.name = "ModbusBle1";
        modbusBleDevice.netId = "BBBBBBBB";
        modbusBleDevice.networkType = "3P";
        modbusBleDevice.deviceCapacities = [modbusCapacitiesForBleModbus, bleCapacitiesForBleModbus];
        await webviewDeviceRepository.save(modbusBleDevice);

        console.log("Device has been saved: ", modbusBleDevice);

        //////////////////////REQUESTS//////////////////////////////////

        console.log("Requesting WebviewDevice");
        await webviewDeviceRepository.createQueryBuilder("device")
            .innerJoinAndSelect("device.deviceCapacities", "deviceCapacities")
            .getMany()
            .then(result => {
                console.log("device", result);
                result.forEach(device => {
                    console.log("deviceCapacities of device ", device.id, ": ", device.deviceCapacities);
                });
            });

        console.log("Requesting AbstractDeviceCapacities");
        await abstractDeviceCapacitiesRepository
            .createQueryBuilder("capacity")
            .getMany().then(result => {
                console.log(result);
            });

        console.log("Requesting BleDeviceCapacities");
        await bleDeviceCapacitiesRepository
            .createQueryBuilder("capacity")
            .getMany().then(result => {
                console.log(result);
            });

        console.log("Requesting ModbusDeviceCapacities");
        await modbusDeviceCapacitiesRepository
            .createQueryBuilder("capacity")
            .getMany().then(result => {
                console.log(result);
            });

        console.log("Requesting ModbusGenericDeviceCapacities");
        await modbusGenericDeviceCapacitiesRepository
            .createQueryBuilder("capacity")
            .getMany().then(result => {
                console.log(result);
            });

    } catch (error) {
        console.log(error);
    }
    finally {
        connection.close();
    }
});