// @ts-ignore

import { Parts } from '../Models/part';
import { PartType } from '../Models/partType';
import { ShopPrint } from './shopPrint';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Shop<T> extends ShopPrint {

    private readonly startingCapital = 10000;

    private readonly addedValue = 0.20;

    private readonly shopType: PartType;

    private capital: number;


    private partsHolding: Map<string, ProductInfo>;

    private shopPrint: ShopPrint;


    constructor(T: PartType) {
        super();
        this.partsHolding = new Map();
        this.capital = this.startingCapital;
        this.shopType = T;
        this.shopPrint = new ShopPrint();

    }


    // eslint-disable-next-line @typescript-eslint/no-shadow,@typescript-eslint/no-redeclare
    public buyPart<T>(T: PartType, part: Parts, count: number): void {

        if (T == this.shopType) {
            this.buying(part, count);
        }
    }

    public sellPart(T: PartType, name: string, count: number): void {
        if (T === this.shopType) {
            this.selItem(name, count);
        }
    }

    public getPartInfo(T: PartType, name: string, info: 'property' | 'all'): void {
        if (T == this.shopType) {
            if (this.partsHolding.has(name)) {
                this.getInfo(name, info);
            }
        }

    }

    // eslint-disable-next-line @typescript-eslint/no-redeclare
    public getPartProfitAndLoss<T>(T: PartType, name: string) {
        if (T == this.shopType) {
            let temp: ProductInfo;
            if (this.partsHolding.has(name)) {
                temp = <ProductInfo> this.partsHolding.get(name);
                const profit = temp?.bought * temp?.itemDescription.price;
                const loss = temp?.sold * ((temp?.itemDescription.price * this.addedValue)
                    + temp?.itemDescription.price);
                const subtotal: number = loss - profit;
                this.shopPrint.profitLostPrint(
                    temp.bought, temp.sold, profit, loss, subtotal, temp?.itemDescription);
                return subtotal;
            }
        }
    }

    public geShopProfitAndLoss(T: PartType): void {
        let profitLoss = 0;
        if (T == this.shopType) {
            this.partsHolding.forEach(value => (
                profitLoss += <number> this.getPartProfitAndLoss(this.shopType, value.itemDescription.name)
            ));
        }
        this.shopPrint.summaryPrint(profitLoss, this.capital);
    }

    private getInfo(name: string, info: 'property' | 'all'): void {
        let temp: ProductInfo | undefined;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars,prefer-const
        temp = this.partsHolding.get(name);
        if (info == 'property') {
            temp?.itemDescription.partInfo();
        }
        if (info == 'all') {
            temp?.itemDescription.partFullDescription();
        }
    }

    //hellper
    private selItem(name: string, count: number) {
        let temp: ProductInfo;
        if (this.partsHolding.has(name)) {
            temp = <ProductInfo> this.partsHolding.get(name);
            if (temp.inStorage < count) {
                this.shopPrint.sellPartUnavailable(count, temp.inStorage);
            } else {
                this.capital +=
                    count * ((temp.itemDescription.price * this.addedValue) + temp.itemDescription.price);
                temp.sold += count;
                temp.inStorage -= count;
                this.partsHolding.set(name, temp);
                this.shopPrint.sellPartSuccessfuly(count, temp.itemDescription.name, temp.inStorage);
            }

        }
    }

    private buying(part: Parts, count: number) {
        let moneyNeedEt: number;
        const cost: number = part.price * count;
        if (this.capital - (cost) < 0) {
            moneyNeedEt = (cost) - this.capital;
            this.shopPrint.buyPartNeedsMoreMoney(moneyNeedEt);
            return;
        } else {
            this.capital = this.capital - cost;
            part.availability += count;
            this.addItem(part, count);
        }
    }

    private addItem(part: Parts, count: number) {
        let temp: ProductInfo;
        if (this.partsHolding.has(part.name)) {
            temp = <ProductInfo> this.partsHolding.get(part.name);
            temp.bought += count;
            temp.inStorage += count;
            this.partsHolding.set(part.name, temp);
            this.shopPrint.byPartsuccessfully(count, temp.itemDescription.name, temp.inStorage);
        } else {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-shadow
            const temp: ProductInfo = new ProductInfo(count, 0, count, part);
            this.partsHolding.set(part.name, temp);
            this.shopPrint.byPartsuccessfully(count, temp.itemDescription.name, temp.inStorage);
        }
    }
}

export class ProductInfo {
    constructor(
        public bought: number,
     public sold: number,
     public inStorage: number,
     public itemDescription: Parts,
    ) {
    }
}

