import { Parts } from './part';
import { PartType } from './partType';

export class InteriorParts extends Parts {
    public _materials: string;

    public _fragile: boolean;

    public availability: number;

    constructor(partType: PartType,
                name: string,
                price: number,
                availability: number,
                materials:
                    string,
                fragile: boolean) {
        super(partType, name, price, availability);
        this.partType = partType;
        this.name = name;
        this.price = price;
        this.availability = availability;
        this._materials = materials;
        this._fragile = fragile;

    }

    partFullDescription(): void {
        this.partInfo();
        // eslint-disable-next-line no-console
        console.log(this._fragile, this._materials);
    }

    override partInfo(): void {
        // eslint-disable-next-line no-console
        console.log(this.partType, this.name, this.price, this.availability);
    }

}