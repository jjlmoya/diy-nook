import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Arco de Bellotas',
    image: 'FtrNutArch.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.PINECONE,
      quantity: '?'
    }]
  }, {
    name: 'Lámpara de Bellotas',
    image: 'FtrNutLamp.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.PINECONE,
      quantity: 6
    }, {
      ...MATERIALS.CLAY,
      quantity: 4
    }]
  }, {
    name: 'Jugue de Bellotas',
    image: 'FtrNutMobile.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.BRANCH,
      quantity: 3
    }, {
      ...MATERIALS.ACORN,
      quantity: 3
    }, {
      ...MATERIALS.PINECONE,
      quantity: 2
    }]
  }, {
    name: 'Árbol de Bellotas',
    image: 'FtrNutTreeL.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MAPLE,
    materials: []
  }, {
    name: 'Árbol de bellotas pequeño',
    image: 'FtrNutTreeS.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 1
    }, {
      ...MATERIALS.ACORN,
      quantity: 4
    }, {
      ...MATERIALS.PINECONE,
      quantity: 6
    }]
  }
]
