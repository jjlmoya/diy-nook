import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Pila de Lingotes de Oro',
    image: 'FtrGoldbar.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Banco de Oro',
    image: 'FtrGoldbench.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 5
    }]
  }, {
    name: 'Candelabro de Oro',
    image: 'FtrGoldCandlestand.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Tumba dorada',
    image: 'FtrGoldCoffin.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 8
    }]
  }, {
    name: 'Cubertería de Oro',
    image: 'FtrGoldDishes.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 1
    }]
  }, {
    name: 'Lavabo Dorado',
    image: 'FtrGoldWC.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOILET, CATEGORY.FURNITURE],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 6
    }]
  }, {
    name: 'Escarabajo de Oro',
    image: 'FtrInsectKabutomushiGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Gato de la suerte Dorado',
    image: 'FtrManekinekoGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 3
    }, {
      ...MATERIALS.FURNITURE('Gato de la Suerte'),
      quantity: 1
    }]
  }, {
    name: 'Botas de Oro',
    image: 'ShoesKneeKnightGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.SHOES],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Armadura de Oro',
    image: 'TopsTexOnepieceOverallLPlatearmorGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 8
    }]
  }, {
    name: 'Casco de Oro',
    image: 'CapFullfaceKnightGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.CAP],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 5
    }]
  }, {
    name: 'Trofeo Arowana de Oro',
    image: 'FtrFishArowanaGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE_OBJECT],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Engranaje de Oro',
    image: 'FtrGearWallGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.WALL_OBJECT],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 1
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }]
  }
]