import { Column, Entity } from "typeorm";
import { AbstractDevice } from "./AbstractDevice";

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