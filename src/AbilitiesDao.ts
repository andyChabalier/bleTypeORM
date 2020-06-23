import { Connection, Repository } from "typeorm";
import { CustomDeviceAbilitiesRepository } from "./repository/customDeviceAbilitiesRepository";
import { AbstractDeviceAbilities } from "./entity/AbstractDeviceAbilities";
import { AbstractDevice } from "./entity/AbstractDevice";
export class AbilitiesDao {


    constructor(private abilitiesRepository: CustomDeviceAbilitiesRepository) { }

    public async create<T extends AbstractDeviceAbilities>(ability: T, type: typeof AbstractDeviceAbilities): Promise<void> {
        await this.abilitiesRepository.createAndSave(ability, type);
    }

    public async getCapacitiesByDevices(device: AbstractDevice): Promise<AbstractDeviceAbilities[]> {
        return await this.abilitiesRepository.findByAbstractDevice(device);
    }
}