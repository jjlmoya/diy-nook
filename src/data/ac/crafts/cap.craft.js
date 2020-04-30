import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

const CAP_COSTUME_SNOWBALL = {
  name: 'Gorro Muñeco de Nieve',
  image: 'CapCostumeSnowball0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.ICE,
  materials: [{
    ...MATERIALS.ICE,
    quantity: 5
  }, {
    ...MATERIALS.ICE_XL,
    quantity: 1
  }]
}
const CAP_COSTUME_STAR = {
  name: 'Gorro Estrella',
  image: 'CapCostumeStar0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 5
  }]
}
const CAP_KNIGHT_IRON = {
  name: 'Yelmo',
  image: 'CapFullfaceKnightIron.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 5
  }]
}
const CAP_AJIRO_BEIGE = {
  name: 'Gorro de Bambú cónico',
  image: 'CapHatAjiroBeige.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 10
  }]
}
const CAP_APPLE = {
  name: 'Gorro Manzana',
  image: 'CapHatApple0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FRUIT,
  materials: [{
    ...MATERIALS.APPLE,
    quantity: 5
  }]
}
const CAP_CHERRY = {
  name: 'Gorro Cerezas',
  image: 'CapHatCherry0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FRUIT,
  materials: [{
    ...MATERIALS.CHERRY,
    quantity: 5
  }]
}
const CAP_ORANGE = {
  name: 'Gorro Naranja',
  image: 'CapHatOrange.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FRUIT,
  materials: [{
    ...MATERIALS.ORANGE,
    quantity: 5
  }]
}
const CAP_PEACH = {
  name: 'Gorro Melocotón',
  image: 'CapHatPeach0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FRUIT,
  materials: [{
    ...MATERIALS.PEACH,
    quantity: 5
  }]
}
const CAP_PEAR = {
  name: 'Gorro Pera',
  image: 'CapHatPear0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FRUIT,
  materials: [{
    ...MATERIALS.PEAR,
    quantity: 5
  }]
}
const CAP_SANDOGASA = {
  name: 'Gorro de Paja achatado',
  image: 'CapHatSandogasa0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 10
  }]
}
const CAP_MASK_LEAF = {
  name: 'Máscara Hoja',
  image: 'CapMaskLeaf0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 10
  }]
}

export default [
  CAP_COSTUME_SNOWBALL,
  CAP_COSTUME_STAR,
  CAP_KNIGHT_IRON,
  CAP_AJIRO_BEIGE,
  CAP_APPLE,
  CAP_CHERRY,
  CAP_ORANGE,
  CAP_PEACH,
  CAP_PEAR,
  CAP_SANDOGASA,
  CAP_MASK_LEAF
]

// TODO: Faltan Gorros de Flores
