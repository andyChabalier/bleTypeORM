import { Connection, Repository } from "typeorm";
import { SmartDeviceAbilitiesRepository } from "./repository/SmartDeviceAbilitiesRepository";
import { AbstractDeviceAbilities } from "./entity/AbstractDeviceAbilities";
import { AbstractDevice } from "./entity/AbstractDevice";
export class AbilitiesDao {

    private abilitiesRepository: SmartDeviceAbilitiesRepository;

    constructor(connection: Connection) {
        this.abilitiesRepository = connection.getCustomRepository(SmartDeviceAbilitiesRepository);
    }

    public async create<T extends AbstractDeviceAbilities>(ability: T, type: typeof AbstractDeviceAbilities): Promise<void> {
        this.abilitiesRepository.createAndSave(ability, type);
    }

    public async getCapacitiesByDevices(device: AbstractDevice): Promise<AbstractDeviceAbilities[]> {
        return await this.abilitiesRepository.findByAbstractDevice(device);
    }
}