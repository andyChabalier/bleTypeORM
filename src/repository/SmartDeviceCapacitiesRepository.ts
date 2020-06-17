import { EntityRepository, Repository } from "typeorm";
import { AbstractDevice } from "../entity/AbstractDevice";
import { AbstractDeviceCapacities } from "../entity/AbstractDeviceCapacities";

@EntityRepository(AbstractDeviceCapacities)
export class SmartDeviceCapacitiesRepository extends Repository<AbstractDeviceCapacities> {

    public async createAndSave<T extends AbstractDeviceCapacities>(entity: T, type: typeof AbstractDeviceCapacities): Promise<void> {
        entity.type = type.name;
        //If the entity type is different of the repository type (then T != type), an error will be triggered by the repository. No save done
        await this.manager.getRepository(type).save(entity);
        await this.save(entity);
    }

    public async findByAbstractDevice(abstractDevice: AbstractDevice): Promise<AbstractDeviceCapacities[]> {
        const capacities = await this.find();
        //Getting the filtered list of capacities linked to the provided abstract device
        return capacities.filter((capacity: AbstractDeviceCapacities) => capacity.abstractDevice.id == abstractDevice.id);
    }

}