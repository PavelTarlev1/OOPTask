import { Parts } from '../Models/part';
import { PartType } from '../Models/partType';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Shop<T extends PartType> {


    private _shopType: PartType;

    private _capital: number;

    private _partsHolding: Map<string, ProductInfo>;


    constructor(T: PartType) {
        this._partsHolding = new Map();
        this._capital = 10000;
        this._shopType = T;
    }

    public buyPart(T: PartType, part: Parts, count: number): void {
        if (T == this._shopType) {
            this.buying(part, count);
        }
    }

    public sellPart(T: PartType, name: string, count: number): void {
        if (T == this._shopType) {
            this.selItem(name, count);
        }
    }

    public getPartInfo(T: PartType, name: string, info: string): void {
        if (T == this._shopType) {
            if (this._partsHolding.has(name)) {
                this.getInfo(name, info);
            }
        }

    }

    public getPartProfitAndLoss(T: PartType, name: string) {
        if (T == this._shopType) {
            let temp: ProductInfo | undefined;
            if (this._partsHolding.has(name)) {
                temp = this._partsHolding.get(name);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const profit: number = temp?.bought * temp?._itemDescription._price;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line max-len
                const loss: number = temp?.sold * ((temp?._itemDescription._price * 0.20) + temp?._itemDescription._price);
                const subtotal: number = profit - loss;

                // eslint-disable-next-line no-console
                console.log(temp?._itemDescription._name + ' costs ' + temp?._itemDescription._price);

                // eslint-disable-next-line no-console
                console.log('   • Bought:' + temp?.bought + '(' + temp?.bought + 'x' + temp?._itemDescription._price + '=' + profit + ')');

                // eslint-disable-next-line no-console
                console.log('   • Sold:' + temp?.sold + '(' + temp?.sold + 'x(' + temp?._itemDescription._price + '+20%)=' + loss + ')');
                if (subtotal >= 0) {
                    // eslint-disable-next-line no-console
                    console.log('   • Subtotal:(' + subtotal + ')[LOSS]');
                } else {
                    // eslint-disable-next-line no-console
                    console.log('   • Subtotal:(' + subtotal + ')[PROFIt]');
                }
                // eslint-disable-next-line no-console

            }
        }
    }

    public GeShopProfitAndLoss(T: PartType): void {
        let bought = 0;
        let sold = 0;
        if (T == this._shopType) {
            this._partsHolding.forEach((value) => bought += value.bought);
            this._partsHolding.forEach((value) => sold += value.sold);

            console.log(bought + '  ' + sold);
        }

    }

    private getInfo(name: string, info: string): void {
        let temp: ProductInfo | undefined;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars,prefer-const
        temp = this._partsHolding.get(name);
        if (info == 'property') {
            temp?._itemDescription.partInfo();
        }
        if (info == 'all') {
            temp?._itemDescription.partFullDescription();
        }

    }

    //hellper
    private selItem(name: string, count: number) {
        let temp: ProductInfo | undefined;
        if (this._partsHolding.has(name)) {
            temp = this._partsHolding.get(name);

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (temp?.inStorage < count) {
                // eslint-disable-next-line no-console
                console.log('you are asking 2 much');
            } else {

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this._capital += ((temp?._itemDescription._price * 0.20) + temp?._itemDescription._price);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                temp?.sold += count;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                temp?.inStorage -= count;
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                if (temp instanceof ProductInfo) {
                    this._partsHolding.set(name, temp);
                }
                // eslint-disable-next-line no-console
                console.log('sale successful');
            }

        }
    }


    private buying(part: Parts, count: number) {
        let moneyNeedEt: number;
        const cost: number = part._price * count;
        if (this._capital - (cost) < 0) {
            moneyNeedEt = (cost) - this._capital;
            // eslint-disable-next-line no-console
            console.log('We need ' + moneyNeedEt + ' more money to buy this part!');
            return;
        } else {
            this._capital = this._capital - part._price;
            part._availability += count;
            this.addItem(part, count);
        }
    }

    private addItem(part: Parts, count: number) {
        let temp: ProductInfo | undefined;
        if (this._partsHolding.has(part._name)) {
            temp = this._partsHolding.get(part._name);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            temp.bought += count;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            temp?.inStorage += count;
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            if (temp instanceof ProductInfo) {
                this._partsHolding.set(part._name, temp);
            }
        } else {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-shadow
            const temp: ProductInfo = new ProductInfo(count, 0, count, part);
            this._partsHolding.set(part._name, temp);
        }
        // eslint-disable-next-line no-console
        console.log('Successfully added');

    }


}

export class ProductInfo {
    public bought: number;

    public sold: number;

    public inStorage: number;

    public _itemDescription: Parts;

    constructor(bought: number, sold: number, inStorage: number, itemDescription: Parts) {
        this.bought = bought;
        this.sold = sold;
        this.inStorage = inStorage;
        this._itemDescription = itemDescription;

    }
}

