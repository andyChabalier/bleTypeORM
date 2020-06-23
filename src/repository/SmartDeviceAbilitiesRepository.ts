import { EntityRepository, Repository } from "typeorm";
import { AbstractDevice } from "../entity/AbstractDevice";
import { AbstractDeviceAbilities } from "../entity/AbstractDeviceAbilities";

@EntityRepository(AbstractDeviceAbilities)
export class SmartDeviceAbilitiesRepository extends Repository<AbstractDeviceAbilities> {

    /**
     * Utility method to create an abstract device abilities and save the corresponding sub abilities
     * @param entity entity to save
     * @param type  type of the entity. It have to be a type of AbstractDeviceAbilities
     */
    public async createAndSave<T extends AbstractDeviceAbilities>(entity: T, type: typeof AbstractDeviceAbilities): Promise<void> {
        entity.type = type.name;
        //If the entity type is different of the repository type (then T != type), an error will be triggered by the repository. No save done
        const savedEntity: T = await this.manager.getRepository(type).save(entity);
        entity.referenceId = savedEntity.id;
        this.save(entity);
    }

    /**
     * Fetchs the abilities linked to the abstract device. The abilities needs to be registered in the AbstractDeviceAbilities table
     * @param abstractDevice the device from wich to fetch abilities
     * @returns an array with all abilities. They have all properties from the subtype object
     */
    public async findByAbstractDevice(abstractDevice: AbstractDevice): Promise<AbstractDeviceAbilities[]> {
        const abilities = await this.find({ relations: ["abstractDevice"] });
        return Promise.all(abilities
            //Getting the filtered list of abilities linked to the provided abstract device
            .filter((ability: AbstractDeviceAbilities) => ability.abstractDevice.id == abstractDevice.id)
            //Fetching the corresponding ability from subtables
            .map(async (ability: AbstractDeviceAbilities) => {
                const fullAbility: AbstractDeviceAbilities = await this.manager.getRepository(ability.type).findOne({ id: ability.referenceId, relations: ["abstractDevice"] }) as AbstractDeviceAbilities;
                return fullAbility;
            }));
    }
}