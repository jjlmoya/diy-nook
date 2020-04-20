import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Cama de Construcciones',
    image: 'FtrBlockBedS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 17
    }]
  }, {
    name: 'Juguete de Construcciones',
    image: 'FtrBlockBrick.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Banco de Construcciones',
    image: 'FtrBlockChairL.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 4
    }]
  }, {
    name: 'Sillita de Construcciones',
    image: 'FtrBlockChairS.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Cómoda de Construcciones',
    image: 'FtrBlockChest.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 12
    }]
  },
  {
    name: 'Reloj de Pared Construcciones',
    image: 'FtrBlockClock.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
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
    name: 'Cadena de Construcciones',
    image: 'FtrBlockCompo.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 5
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Estantería de Construcciones',
    image: 'FtrBlockShelf.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Taburete de Construcciones',
    image: 'FtrBlockStoolS.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 2
    }]
  }, {
    name: 'Mesa de Construcciones',
    image: 'FtrBlockTableL.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FURNITURE('Juguete de Construcciones'),
      quantity: 1
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 8
    }]
  }
]
