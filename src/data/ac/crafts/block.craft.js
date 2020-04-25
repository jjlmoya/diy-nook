import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Cama Construcciones',
    image: 'FtrBlockBedS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 17
    }]
  }, {
    name: 'Juguete Construcciones',
    image: 'FtrBlockBrick.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE_OBJECT],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Banco Construcciones',
    image: 'FtrBlockChairL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 4
    }]
  }, {
    name: 'Silla Construcciones',
    image: 'FtrBlockChairS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Cómoda Construcciones',
    image: 'FtrBlockChest.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHEST],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 12
    }]
  },
  {
    name: 'Reloj Pared Construcciones',
    image: 'FtrBlockClock.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CLOCK],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 2
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 1
    }
    ]
  }, {
    name: 'Cadena Construcciones',
    image: 'FtrBlockCompo.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.MUSIC],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 5
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Estantería Construcciones',
    image: 'FtrBlockShelf.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.SHELVE],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Taburete Construcciones',
    image: 'FtrBlockStoolS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 2
    }]
  }, {
    name: 'Mesa Construcciones',
    image: 'FtrBlockTableL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 8
    }]
  }
]
