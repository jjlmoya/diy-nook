import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Reloj Estrella',
    image: 'FtrStarClock.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL_OBJECT],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 1
    }]
  }, {
    name: 'Guirnalda de Estrellas',
    image: 'FtrStarDecorationWall.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 10
    }]
  }, {
    name: 'Nova Light',
    image: 'FtrStarLamp.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }]
  }, {
    name: 'Silla Lunar',
    image: 'FtrStarMoonChairL.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 7
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  },
  {
    name: 'Nave Tripulada',
    image: 'FtrSpacecraft.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 10
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 20
    }]
  }, {
    name: 'Traje Espacial',
    image: 'FtrSpacesuit.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 5
    }]
  }
]
