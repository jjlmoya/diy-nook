import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Paragüero Cuadrado',
    image: 'FtrUmbrellastand.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }]
  },
  {
    name: 'Paraguas Manzana',
    image: 'UmbrellaApple0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.APPLE,
      quantity: 7
    }]
  }, {
    name: 'Parasol Otoño',
    image: 'UmbrellaAutumn0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.MAPLE,
      quantity: 7
    }]
  }, {
    name: 'Paraguas Cereza',
    image: 'UmbrellaCherry0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.CHERRY,
      quantity: 7
    }]
  }, {
    name: 'Parasol Hoja',
    image: 'UmbrellaLeaf0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.GRASS,
    materials: [{
      ...MATERIALS.HERB,
      quantity: 15
    }]
  }, {
    name: 'Paraguas Seta',
    image: 'UmbrellaMushroom0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.MUSHROOM,
    materials: [{
      ...MATERIALS.ELEGANT_MUSHROOM,
      quantity: '?'
    }]
  }, {
    name: 'Paraguas Naranja',
    image: 'UmbrellaOrange0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.ORANGE,
      quantity: 7
    }]
  }, {
    name: 'Paraguas Melocotón',
    image: 'UmbrellaPeach0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEACH,
      quantity: 7
    }]
  }, {
    name: 'Paraguas Pera',
    image: 'UmbrellaPear0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.UMBRELLA],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 7
    }]
  }
]
