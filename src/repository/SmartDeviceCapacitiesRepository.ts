import { EntityRepository, Repository } from "typeorm";
import { AbstractDevice } from "../entity/AbstractDevice";
import { AbstractDeviceCapacities } from "../entity/AbstractDeviceCapacities";

@EntityRepository(AbstractDeviceCapacities)
export class SmartDeviceCapacitiesRepository extends Repository<AbstractDeviceCapacities> {

    /**
     * Utility method to create an abstract device capacities and save the corresponding sub capacities
     * @param entity entity to save
     * @param type  type of the entity. It have to be a type of AbstractDeviceCapacities
     */
    public async createAndSave<T extends AbstractDeviceCapacities>(entity: T, type: typeof AbstractDeviceCapacities): Promise<void> {
        entity.type = type.name;
        //If the entity type is different of the repository type (then T != type), an error will be triggered by the repository. No save done
        const savedEntity: T = await this.manager.getRepository(type).save(entity);
        entity.referenceId = savedEntity.id;
        this.save(entity);
    }

    /**
     * Fetchs the capacities linked to the abstract device. The capacities needs to be registered in the AbstractDeviceCapacities table
     * @param abstractDevice the device from wich to fetch capacities
     * @returns an array with all capacities. They have all properties from the subtype object
     */
    public async findByAbstractDevice(abstractDevice: AbstractDevice): Promise<AbstractDeviceCapacities[]> {
        const capacities = await this.find();
        return Promise.all(capacities
            //Getting the filtered list of capacities linked to the provided abstract device
            .filter((capacity: AbstractDeviceCapacities) => capacity.abstractDevice.id == abstractDevice.id)
            //Fetching the corresponding capacity from subtables
            .map(async (capacity: AbstractDeviceCapacities) => {
                const fullCapacity: AbstractDeviceCapacities = await this.manager.getRepository(capacity.type).findOne({ id: capacity.referenceId }) as AbstractDeviceCapacities;
                return fullCapacity;
            }));
    }
}