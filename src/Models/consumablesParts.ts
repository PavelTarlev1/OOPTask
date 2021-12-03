import { Parts } from './part';
import { PartType } from './partType';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class ConsumablesParts extends Parts {
    private quantity: number;

    private expirationDate: Date;


    // eslint-disable-next-line max-len
    constructor(partType: PartType, name: string, price: number, availability: number, quantity: number, expirationDate: Date) {
        super(partType, name, price, availability);
        this.partType = partType;
        this.name = name;
        this.price = price;
        this.availability = availability;
        this.quantity = quantity;
        this.expirationDate = expirationDate;


    }

    partFullDescription(): void {
        //this.partInfo();

        console.log(this.partType, this.name, this.price, this.availability, this.quantity, this.expirationDate);
    }

    override partInfo(): void {
        // eslint-disable-next-line no-console
        console.log(this.partType, this.name, this.price, this.availability);
    }



}