import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [{
  name: 'Jarron Acuario',
  image: 'FtrZodiacAquarius.png',
  height: 1,
  width: 1,
  category: [CATEGORY.OBJECT],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Acuario'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}, {
  name: 'Mecedora Aries',
  image: 'FtrZodiacAries.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Aries'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: 1
  }, {
    ...MATERIALS.STONE,
    quantity: 5
  }]
}, {
  name: 'Mesita Cáncer',
  image: 'FtrZodiacCancer.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Cáncer'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}, {
  name: 'Escultura Capricornio',
  image: 'FtrZodiacCapricornus.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Capricornio'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}, {
  name: 'Armario Géminis',
  image: 'FtrZodiacGemini.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Géminis'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}, {
  name: 'Cuadro Leo',
  image: 'FtrZodiacLeo.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Leo'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}, {
  name: 'Balanza Libra',
  image: 'FtrZodiacLibra.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Libra'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Pedestal Piscis',
  image: 'FtrZodiacPisces.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Piscis'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: 2
  }, {
    ...MATERIALS.STONE,
    quantity: 4
  }]
}, {
  name: 'Arco de Sagitario',
  image: 'FtrZodiacSagittarius.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Sagitario'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}, {
  name: 'Escultura Escorpio',
  image: 'FtrZodiacScorpio.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Escorpio'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}, {
  name: 'Fuente Tauro',
  image: 'FtrZodiacTaurus.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Tauro'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: 1
  }, {
    ...MATERIALS.STONE,
    quantity: 8
  }]
}, {
  name: 'Arpa Virgo',
  image: 'FtrZodiacVirgo.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.ZODIAC,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 3
  }, {
    ...MATERIALS.CONSTELATION_FRAGMENT('Virgo'),
    quantity: 2
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: '?'
  }]
}]
