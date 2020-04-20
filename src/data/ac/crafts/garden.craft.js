import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Silla de Jardín Natural',
    image: 'FtrGardenChairNatural.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.GARDEN,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 6
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Roca Gruesa',
    image: 'FtrGardenrock.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 15
    }]
  }, {
    name: 'Roca Plana',
    image: 'FtrGardenrockLow.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 20
    }]
  }, {
    name: 'Roca con Musgo',
    image: 'FtrGardenrockMoss.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 15
    }, {
      ...MATERIALS.HERB,
      quantity: 15
    }]
  }, {
    name: 'Roca Alta',
    image: 'FtrGardenrockTall.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 60
    }]
  }, {
    name: 'Mesa Madera Natual',
    image: 'FtrGardenTableNatural.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.GARDEN,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 9
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Tabla de Jardín Natural',
    image: 'FtrGardenTableSNatural.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.GARDEN,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }, {
      ...MATERIALS.SOLID_WOOD,
      quantity: 6
    }]
  }, {
    name: 'Carreta de Flores',
    image: 'FtrGardenwagon.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.JACINT_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.COSMOS_RED,
      quantity: 2
    }, {
      ...MATERIALS.WOOD,
      quantity: 8
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }]
  }
]
