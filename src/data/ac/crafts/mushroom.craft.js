import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

const UNKNOWN = [
  {
    ...MATERIALS.ELEGANT_MUSHROOM,
    quantity: '?'
  },
  {
    ...MATERIALS.FLAT_MUSHROOM,
    quantity: '?'
  },
  {
    ...MATERIALS.ROUND_MUSHROOM,
    quantity: '?'
  },
  {
    ...MATERIALS.THIN_MUSHROOM,
    quantity: '?'
  },
  {
    ...MATERIALS.TRUFFLE,
    quantity: '?'
  }
]
export default [
  {
    name: 'FtrMushroomChairS',
    image: 'FtrMushroomChairS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'FtrMushroomLamp',
    image: 'FtrMushroomLamp.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'FtrMushroomParasol',
    image: 'FtrMushroomParasol.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'FtrMushroomPulpwood',
    image: 'FtrMushroomPulpwood.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'FtrMushroomScreen',
    image: 'FtrMushroomScreen.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'FtrMushroomTableL',
    image: 'FtrMushroomTableL.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }
]
