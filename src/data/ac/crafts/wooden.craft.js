import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [{
  name: 'Cama Individual de Madera',
  image: 'FtrWoodenBedS.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 18
  }]
}, {
  name: 'Cama Doble de Madera',
  image: 'FtrWoodenBedW.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 30
  }]
}, {
  name: 'Silla de Madera',
  image: 'FtrWoodenChairS.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 6
  }]
}, {
  name: 'Cómoda de Madera',
  image: 'FtrWoodenChest.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 16
  }]
}, {
  name: 'Armario de Madera',
  image: 'FtrWoodenCloset.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 12
  }]
}, {
  name: 'Espejo de Madera',
  image: 'FtrWoodenMirror.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: []
}, {
  name: 'Espejito de Mesa de MAdera',
  image: 'FtrWoodenMirrorS.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 1
  }]
}, {
  name: 'Taburete de Madera',
  image: 'FtrWoodenStoolS.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 4
  }]
}, {
  name: 'Mesa de Madera',
  image: 'FtrWoodenTableL.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 15
  }]
}, {
  name: 'Mesa Centro de Madera',
  image: 'FtrWoodenTableM.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 10
  }]
}, {
  name: 'Mesita de Madera',
  image: 'FtrWoodenTableMini.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 6
  }]
}, {
  name: 'Mesita Auxiliar de Madera',
  image: 'FtrWoodenTableS.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 8
  }]
}]
