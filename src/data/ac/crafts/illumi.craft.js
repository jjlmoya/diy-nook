import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Luces de Regalo de Navidad',
    image: 'FtrIllumiPresent.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.LIGHT,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: '?'
    }]
  }, {
    name: 'Luces de Reno',
    image: 'FtrIllumiReindeer.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.LIGHT,
    materials: []
  }, {
    name: 'Luces de Copo de Nieve',
    image: 'FtrIllumiSnow.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.LIGHT,
    materials: []
  }, {
    name: 'Luces de Árbol de Navidad',
    image: 'FtrIllumiTree.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.LIGHT,
    materials: []
  }
]
