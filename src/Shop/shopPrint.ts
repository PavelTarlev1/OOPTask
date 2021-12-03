import { Parts } from '../Models/part';
//TODO:
//Try to remove eSlint console function from this class.


export class ShopPrint {

    public sellPartUnavailable(countWantToSell:number, inStock:number){
        // eslint-disable-next-line no-console
        console.log(`We have ${inStock} and you are asking for ${countWantToSell}.`);
    }

    //Done
    public sellPartSuccessfuly(count:number, partName:string, inStock:number){
        // eslint-disable-next-line no-console
        console.log(`We successfully sold ${count} count from ${partName} part and now we have ${inStock} availability in our shop.`);
    }

    //Done
    public byPartsuccessfully(count:number, partName:string, inStock:number){
        // eslint-disable-next-line no-console
        console.log(`We successfully bought ${count} count from ${partName} part and now we have ${inStock} availability in our shop.`);
    }

    //TODO:change Name method
    // unsuccessful:
    public buyPartNeedsMoreMoney(moneyNeedEt:number){
        // eslint-disable-next-line no-console
        console.log(`We need ${moneyNeedEt} more money to buy this part!`);
    }


    //TODO:
    // Never send more info to the method then it's needed.
    public profitLostPrint(
        bought: number, sold: number, profit: number, loss: number, subtotal: number, part: Parts):void{

        // eslint-disable-next-line no-console
        console.log(part.name + ' costs ' + part.price);

        // eslint-disable-next-line no-console
        console.log(`   • Bought:' ${bought} (${bought}x${part.price}=${profit})`);

        // eslint-disable-next-line no-console
        console.log(`   • Sold: ${sold} (${sold}x(${part.price}+20%)=${loss})`);
        if (subtotal <= 0) {
            // eslint-disable-next-line no-console
            console.log(`   • Subtotal:(${subtotal})[LOSS]`);
        } else {
            // eslint-disable-next-line no-console
            console.log(`   • Subtotal:(${subtotal})[PROFIT]`);
        }
    }

    public summaryPrint(proffitLoss:number, grandtotal:number){
        console.log('+-------------------------------+');
        console.log('|          SUMMARY              |');
        console.log('+-------------------------------+');
        console.log('|                               |');
        if (<number > proffitLoss >= 0){
            console.log('|     PROFIT:' + proffitLoss + '        |');
            console.log('|                               |');
            console.log('|GRANDTOTAL:' + grandtotal + '  (PROFIT)|');

        } else {
            console.log('|     LOSS:' + proffitLoss + '        |');
            console.log('|                               |');
            console.log('|GRANDTOTAL:' + grandtotal + '  (LOSS)|');
        }
        console.log('|                               |');
        console.log('+-------------------------------+');
    }


}