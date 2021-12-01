import { PartType } from './partType';

export abstract class Parts {

    _partType: PartType;

    _name: string;

    _price: number;

    _availability: number;


    protected constructor(partType: PartType, name: string, price: number, availability: number) {
        this._partType = partType;
        this._name = name;
        this._price = price;
        this._availability = availability;

    }

    public abstract partInfo(): void;

    public abstract partFullDescription(): void;
}
