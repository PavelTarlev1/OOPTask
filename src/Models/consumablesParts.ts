import { Parts } from './part';
import { PartType } from './partType';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class ConsumablesParts extends Parts {
    private _quantity: number;

    private _expirationDate: Date;


    // eslint-disable-next-line max-len
    constructor(partType: PartType, name: string, price: number, availability: number, quantity: number, expirationDate: Date) {
        super(partType, name, price, availability);
        this._partType = partType;
        this._name = name;
        this._price = price;
        this._availability = availability;
        this._quantity = quantity;
        this._expirationDate = expirationDate;


    }

    partFullDescription(): void {
        this.partInfo();

        console.log(this._quantity, this._expirationDate);
    }

    override partInfo(): void {
        // eslint-disable-next-line no-console
        console.log(this._partType, this._name, this._price, this._availability);
    }



}