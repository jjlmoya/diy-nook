import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Taburete de Piedra',
    image: 'FtrStoneChair.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR, CATEGORY.CHAIR],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 3
    }]
  }, {
    name: 'Farol Alto',
    image: 'FtrStonelantern.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR, CATEGORY.LAMP],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 18
    }]
  }, {
    name: 'Horno de Ladrillo',
    image: 'FtrStoneoven.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.CLAY,
      quantity: 8
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }, {
      ...MATERIALS.WOOD,
      quantity: 6
    }]
  }, {
    name: 'Mesa de Piedra',
    image: 'FtrStoneTable.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR, CATEGORY.TABLE],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 8
    }]
  }, {
    name: 'Roca con Agua',
    image: 'FtrStonewaterbowl.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 10
    }]
  }, {
    name: 'Roca con Agua y hojas',
    image: 'FtrStonewaterbowlAutumun.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 10
    }, {
      ...MATERIALS.AUTUMN_PETALS,
      quantity: 3
    }]
  }, {
    name: 'Roca con Agua y Pétalos',
    image: 'FtrStonewaterbowlSakura.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 10
    }, {
      ...MATERIALS.CHERRY_PETALS,
      quantity: 3
    }]
  }
]
