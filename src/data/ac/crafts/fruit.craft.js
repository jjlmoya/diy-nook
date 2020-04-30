import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Cesta de Frutas',
    image: 'FtrFruitbasket.png',
    height: 1,
    width: 1,
    category: [CATEGORY.OBJECT],
    serie: SERIES.FRUIT,
    materials: []
  }, {
    name: 'Cama Pera',
    image: 'FtrFruitsBedS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.BED],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 5
    }]
  }, {
    name: 'Caja sorpresa Melocotón',
    image: 'FtrFruitsBox.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 10
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 4
    }]
  }, {
    name: 'Silla Manzana',
    image: 'FtrFruitsChairApple.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.APPLE,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 4
    }]
  }, {
    name: 'Sillón Melocotón',
    image: 'FtrFruitsChairPeach.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 5
    }]
  }, {
    name: 'Reloj de pared Naranja',
    image: 'FtrFruitsClockW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL_OBJECT, CATEGORY.CLOCK],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.ORANGE,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 2
    }]
  }, {
    name: 'Armario Pera',
    image: 'FtrFruitsClosetLR.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.WARDROBE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 5
    }]
  }, {
    name: 'Lámpara Cereza',
    image: 'FtrFruitsLampW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.CHERRY,
      quantity: 10
    }, {
      ...MATERIALS.CLAY,
      quantity: 2
    }]
  }, {
    name: 'Cadena Cereza',
    image: 'FtrFruitsMusic.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.MUSIC],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.CHERRY,
      quantity: 10
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Mesa auxiliar Naranja',
    image: 'FtrFruitsTableS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.ORANGE,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 4
    }]
  }, {
    name: 'Tele Manzana',
    image: 'FtrFruitsTV.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.APPLE,
      quantity: 10
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Jarro de Agua afrutada',
    image: 'FtrFruitswater.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.FRUIT,
    materials: [
      {
        ...MATERIALS.PEAR,
        quantity: 2
      },
      {
        ...MATERIALS.APPLE,
        quantity: 2
      }, {
        ...MATERIALS.ORANGE,
        quantity: 2
      }, {
        ...MATERIALS.PEACH,
        quantity: 2
      },
      {
        ...MATERIALS.COCONUT,
        quantity: 2
      }, {
        ...MATERIALS.CHERRY,
        quantity: 2
      }
    ]
  }, {
    name: 'Alfombra Pera',
    image: 'RugOtherPearM00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 6
    }]
  }, {
    name: 'Top Pera',
    image: 'TopsTexOnepieceAlineNPear0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 8
    }]
  }, {
    name: 'Alfombra Manzana',
    image: 'RugOtherAppleM00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.APPLE,
      quantity: 7
    }]
  }, {
    name: 'Vestido Manzanas',
    image: 'TopsTexOnepieceAlineNApple0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.FULL],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.APPLE,
      quantity: 8
    }]
  }, {
    name: 'Vestido Melocotones',
    image: 'TopsTexOnepieceAlineNPeach0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 7
    }]
  }, {
    name: 'Alfombra Melocotón',
    image: 'RugOtherPeachM00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEACH,
      quantity: 8
    }]
  }, {
    name: 'Vestido Cerezas',
    image: 'TopsTexOnepieceAlineNCherry0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.CHERRY,
      quantity: 8
    }]
  }, {
    name: 'Vestido Naranjas',
    image: 'TopsTexOnepieceAlineNOrange.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.ORANGE,
      quantity: 8
    }]
  }, {
    name: 'Alfombra Cerezas',
    image: 'RugOtherCherryM00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.CHERRY,
      quantity: 7
    }]
  }, {
    name: 'Alfombra Rodaja Naranja',
    image: 'RugOtherOrangeM00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.ORANGE,
      quantity: 6
    }]
  }
]
