import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

const MOUTH_LEFT_GREEN = {
  name: 'Hoja',
  image: 'AccessoryMouthLeafGreen.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CAP, CATEGORY.ACCESORY],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: '5'
  }]
}

export default [
  MOUTH_LEFT_GREEN
]
