import { PartType } from './partType';

export abstract class Parts {

    partType: PartType;

    name: string;

    price: number;

    availability: number;


    protected constructor(partType: PartType, name: string, price: number, availability: number) {
        this.partType = partType;
        this.name = name;
        this.price = price;
        this.availability = availability;

    }

    public abstract partInfo(): void;

    public abstract partFullDescription(): void;
}
