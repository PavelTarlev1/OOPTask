import { CorePartDepend } from './CorePartDepend';
import { Parts } from './part';
import { PartType } from './partType';

export class CoreParts extends Parts {

    _dependOn: string[] = [];

    _usedFor: CorePartDepend;

    _weight: number;

    constructor(partType: PartType, name: string, price: number, availability: number,
                userdFor: CorePartDepend, weight: number, dependOn: string[]) {
        super(partType, name, price, availability);
        this._partType = partType;
        this._name = name;
        this._price = price;
        this._availability = availability;
        this._usedFor = userdFor;
        this._weight = weight;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this._dependOn.push(dependOn);

    }

    partFullDescription(): void {
        this.partInfo();
        // eslint-disable-next-line no-console
        //console.log('old text\u001b[2K\u001b[this._usedFor, this._weight, JSON.stringify(this._dependOn');
        console.log(this._usedFor, this._weight, JSON.stringify(this._dependOn));
    }

    override partInfo(): void {
        // eslint-disable-next-line no-console
        console.log(this._partType, this._name, this._price, this._availability);
    }



}
