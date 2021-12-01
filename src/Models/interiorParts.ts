import { Parts } from './part';
import { PartType } from './partType';

export class InteriorParts extends Parts {
    public _materials: string;

    public _fragile: boolean;

    public _availability: number;

    constructor(partType: PartType, name: string, price: number, availability:
        number, materials: string, fragile: boolean) {
        super(partType, name, price, availability);
        this._partType = partType;
        this._name = name;
        this._price = price;
        this._availability = availability;
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
        console.log(this._partType, this._name, this._price, this._availability);
    }

}