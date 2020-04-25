import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

const BACKPACK_GRASS = {
  name: 'Mochila de Mimbre',
  image: 'BagBackpackGrass0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 20
  }]
}

const BACKPACK_WOOD = {
  name: 'Bolsito Troncos',
  image: 'BagBackpackWood0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }, {
    ...MATERIALS.SOLID_WOOD,
    quantity: 5
  }]
}

const BACKPACK_ACORN = {
  name: 'Bolsito Bellota',
  image: 'BagShoulderAcorn0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.MAPLE,
  materials: [{
    ...MATERIALS.ACORN,
    quantity: 6
  }]
}

const BACKPACK_MAPLE = {
  name: 'Bolsito Arce',
  image: 'BagShoulderMaple0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.MAPLE,
  materials: [{
    ...MATERIALS.MAPLE,
    quantity: 6
  }]
}

const BACKPACK_SHELL = {
  name: 'Bolsito Conchas Marinas',
  image: 'BagShoulderShell0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.SHELL,
  materials: [
    {
      ...MATERIALS.GIANT_CLAM,
      quantity: 2
    }, {
      ...MATERIALS.SHELL_SUMMER,
      quantity: 6
    }]
}

const BACKPACK_SNOW = {
  name: 'Bolsito de Hielo',
  image: 'BagShoulderSnow0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.ICE,
  materials: [{
    ...MATERIALS.ICE,
    quantity: 6
  }]
}

const BACKPACK_STAR = {
  name: 'Bolsito Estrella',
  image: 'BagShoulderStar0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 6
  }]
}

export default [
  BACKPACK_ACORN,
  BACKPACK_MAPLE,
  BACKPACK_STAR,
  BACKPACK_WOOD,
  BACKPACK_SNOW,
  BACKPACK_SHELL,
  BACKPACK_GRASS
]
