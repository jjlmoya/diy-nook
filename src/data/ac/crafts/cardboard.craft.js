import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Cama de Cartón',
    image: 'FtrCardboardBedS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.CARDBOARD,
    materials: []
  }, {
    name: 'Silla de Cartón',
    image: 'FtrCardboardChairS.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.CARDBOARD,
    materials: [{
      ...MATERIALS.FURNITURE('Caja de cartón'),
      quantity: 1
    }]
  }, {
    name: 'Sofa de Cartón',
    image: 'FtrCardboardSofaL.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.CARDBOARD,
    materials: [{
      ...MATERIALS.FURNITURE('Caja de cartón'),
      quantity: 2
    }]
  }, {
    name: 'Mesa de Cartón',
    image: 'FtrCardboardTableL.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.CARDBOARD,
    materials: [{
      ...MATERIALS.FURNITURE('Caja de cartón'),
      quantity: 4
    }]
  }
]
