// eslint-disable-next-line import/extensions
import { Shop } from './Shop/shop';
import { CoreParts } from './Models/coreParts';
import { PartType } from './Models/partType';
import { CorePartDepend } from './Models/CorePartDepend';
import { InteriorParts } from './Models/interiorParts';
import { ConsumablesParts } from './Models/consumablesParts';


//let partOne = new consumablesParts(radio,30,true,1,date)
//let coreParts: CoreParts = new CoreParts("Crankshaft", 230, true, CorePartDepend.engineSysterm, 30);


//corePart
const partsDep:string[] = ['engine', 'Window'];
const corePart: CoreParts = new CoreParts(PartType.CORE, 'Crankshaft', 230, 0, CorePartDepend.engineSysterm, 30, partsDep);
const corePartSecond: CoreParts = new CoreParts(PartType.CORE, 'Piston', 210, 0, CorePartDepend.engineSysterm, 30, partsDep);
//interiorPart
const interPart: InteriorParts = new InteriorParts(PartType.INTERIOR, 'Radio', 30, 0, 'metal', true);

//consimablesPart
const date = new Date(2022, 10, 4);
const consumPart: ConsumablesParts = new ConsumablesParts(PartType.CONSUMABLE, 'timingBetl', 400, 30, 3, date);
const InteriorShop = new Shop(PartType.INTERIOR);
const CoreShop = new Shop(PartType.CORE);
CoreShop.buyPart(PartType.CORE, corePart, 3);
CoreShop.buyPart(PartType.CORE, corePart, 3);
CoreShop.buyPart(PartType.CORE, corePart, 3);
//CoreShop.buyPart(PartType.INTERIOR, interPart, 3 );
CoreShop.buyPart(PartType.CORE, corePartSecond, 3 );


CoreShop.sellPart(PartType.CORE, 'Crankshaft', 9);
CoreShop.sellPart(PartType.CORE, 'Piston',  3);
CoreShop.getPartInfo(PartType.CORE, 'Crankshaft', 'all');
//CoreShop.getPartProfitAndLoss(PartType.CORE, 'Crankshaft');
//CoreShop.geShopProfitAndLoss(PartType.CORE);