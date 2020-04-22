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
    category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.PINECONE,
      quantity: 6
    }, {
      ...MATERIALS.CLAY,
      quantity: 4
    }]
  }, {
    name: 'Juguete de Bellotas',
    image: 'FtrNutMobile.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
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
    category: [CATEGORY.TREE, CATEGORY.EXTERIOR],
    serie: SERIES.MAPLE,
    materials: []
  }, {
    name: 'Árbol de bellotas pequeño',
    image: 'FtrNutTreeS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR, CATEGORY.TREE],
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
