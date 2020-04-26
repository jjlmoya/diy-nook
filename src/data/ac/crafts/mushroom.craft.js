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
    name: 'Lámpara Seta',
    image: 'FtrMushroomLamp.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'Mueble Parasol Seta',
    image: 'FtrMushroomParasol.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'Tocón con Setas',
    image: 'FtrMushroomPulpwood.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'Separador de Setas',
    image: 'FtrMushroomScreen.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.SPLITER],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }, {
    name: 'Mesa de Setas',
    image: 'FtrMushroomTableL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.MUSHROOM,
    materials: UNKNOWN
  }
]
