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
  name: 'Casco de Hierro',
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
  name: 'Gorro de Bambú',
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
  name: 'Gorro Ceerza',
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

const CAP_ANEMONE_1 = {
  name: 'Guirnalda Anémona',
  image: 'CapOrnamentAnemone1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.WIND_WHITE,
      quantity: 2
    },
    {
      ...MATERIALS.WIND_RED,
      quantity: 2
    },
    {
      ...MATERIALS.WIND_ORANGE,
      quantity: 2
    }
  ]
}

const CAP_ANEMONE_2 = {
  name: 'Guirnalda Anémona 2',
  image: 'CapOrnamentAnemone2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.WIND_PINK,
      quantity: 3
    },
    {
      ...MATERIALS.WIND_BLUE,
      quantity: 3
    }]
}

const CAP_ANEMONE_3 = {
  name: 'Guirnalda Anémona 3',
  image: 'CapOrnamentAnemone3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.WIND_PURPLE,
      quantity: 6
    }]
}

const CAP_COSMOS_1 = {
  name: 'Guirlanlda Cosmos',
  image: 'CapOrnamentCosmos1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.COSMOS_WHITE,
      quantity: 2
    },
    {
      ...MATERIALS.COSMOS_RED,
      quantity: 2
    },
    {
      ...MATERIALS.COSMOS_YELLOW,
      quantity: 2
    }]
}

const CAP_COSMOS_2 = {
  name: 'Guirnalda Cosmos 2',
  image: 'CapOrnamentCosmos2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.COSMOS_PINK,
      quantity: 3
    },
    {
      ...MATERIALS.COSMOS_ORANGE,
      quantity: 3
    }]
}

const CAP_COSMOS_3 = {
  name: 'Guirnalda Cosmos 3',
  image: 'CapOrnamentCosmos3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.COSMOS_BLACK,
      quantity: 6
    }]
}

const CAP_HYACINTH_1 = {
  name: 'Guirnalda Jacintos',
  image: 'CapOrnamentHyacinth1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.JACINT_WHITE,
      quantity: 2
    },
    {
      ...MATERIALS.JACINT_RED,
      quantity: 2
    },
    {
      ...MATERIALS.JACINT_YELLOW,
      quantity: 2
    }]
}

const CAP_HYACINTH_2 = {
  name: 'Guirnalda Jacintos 2',
  image: 'CapOrnamentHyacinth2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.JACINT_BLUE,
      quantity: 2
    },
    {
      ...MATERIALS.JACINT_ORANGE,
      quantity: 2
    },
    {
      ...MATERIALS.JACINT_PINK,
      quantity: 2
    }]
}

const CAP_HYACINTH_3 = {
  name: 'Guirnalda Jacintos 3',
  image: 'CapOrnamentHyacinth3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [
    {
      ...MATERIALS.JACINT_PURPLE,
      quantity: 6
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
  CAP_MASK_LEAF,
  CAP_ANEMONE_1,
  CAP_ANEMONE_2,
  CAP_ANEMONE_3,
  CAP_COSMOS_1,
  CAP_COSMOS_2,
  CAP_COSMOS_3,
  CAP_HYACINTH_1,
  CAP_HYACINTH_2,
  CAP_HYACINTH_3
]
