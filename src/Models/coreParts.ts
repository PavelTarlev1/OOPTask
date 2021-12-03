import { CorePartDepend } from './CorePartDepend';
import { Parts } from './part';
import { PartType } from './partType';

export class CoreParts extends Parts {

    dependOn: string[] = [];

    usedFor: CorePartDepend;

    weight: number;

    constructor(partType: PartType, name: string, price: number, availability: number,
                userdFor: CorePartDepend, weight: number, dependOn: string[]) {
        super(partType, name, price, availability);
        this.partType = partType;
        this.name = name;
        this.price = price;
        this.availability = availability;
        this.usedFor = userdFor;
        this.weight = weight;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.dependOn.push(dependOn);

    }

    partFullDescription(): void {
        this.partInfo();
        // eslint-disable-next-line no-console
        //console.log('old text\u001b[2K\u001b[this._usedFor, this._weight, JSON.stringify(this._dependOn');
        console.log(this.partType, this.name, this.price, this.availability, this.usedFor, this.weight, JSON.stringify(this.dependOn));
    }

    override partInfo(): void {
        // eslint-disable-next-line no-console
        console.log(this.partType, this.name, this.price, this.availability);
    }



}
