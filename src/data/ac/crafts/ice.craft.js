import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Escultura de Hielo',
    image: 'FtrIceArt.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 4
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Cama de Hielo',
    image: 'FtrIceBedW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.BED],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 10
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Helado',
    image: 'FtrIceCandy.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 1
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Sillón Helado',
    image: 'FtrIceChairS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 3
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Escritorio de Hielo',
    image: 'FtrIceCounter.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.DESKTOP],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 5
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Arco de Hielo',
    image: 'FtrIceGate.png',
    height: 1,
    width: 1,
    category: [CATEGORY.ARK, CATEGORY.EXTERIOR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 1
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 10
    }]
  }, {
    name: 'Pilar de Hielo',
    image: 'FtrIcePillar.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 3
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Separador de Hielo',
    image: 'FtrIceScreen.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.SPLITER],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 6
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Mesa de Hielo',
    image: 'FtrIceTableL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 8
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Árbol de Hielo',
    image: 'FtrIceTree.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TREE, CATEGORY.EXTERIOR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: '?'
    }, {
      ...MATERIALS.ICE_XL,
      quantity: '?'
    }]
  }
]
