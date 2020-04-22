import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Tumbona leño',
    image: 'FtrLogBedS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 12
    }]
  }, {
    name: 'Cama Leño',
    image: 'FtrLogBedW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.BED],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 30
    }]
  }, {
    name: 'Reloj Pared Leño',
    image: 'FtrLogClockWall.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOCK, CATEGORY.WALL_OBJECT],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 2
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 1
    }]
  }, {
    name: 'Estantería Leño',
    image: 'FtrLogShelf.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.SHELVE],
    serie: SERIES.LOG,
    materials: []
  }, {
    name: 'Sofá Leño',
    image: 'FtrLogSofaL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.FURNITURE('Sillón Leño'),
      quantity: 2
    }]
  }, {
    name: 'Sillón Leño',
    image: 'FtrLogSofaS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 8
    }]
  }, {
    name: 'Banco Leño',
    image: 'FtrLogStoolL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 5
    }]
  }, {
    name: 'Taburete Leño',
    image: 'FtrLogStoolS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 4
    }]
  }, {
    name: 'Mesa Comedor Leño',
    image: 'FtrLogTableL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 15
    }]
  }, {
    name: 'Mesa Redonda Leño',
    image: 'FtrLogTableLRound.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 15
    }]
  }
]
