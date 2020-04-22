import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [{
  name: 'Valla de Bambú',
  image: 'ItemFenceBamboo.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [
    {
      ...MATERIALS.BAMBU,
      quantity: 6
    }
  ]
}, {
  name: 'Valla de Alambre',
  image: 'ItemFenceBarbedWire.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 4
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Valla Dinastía',
  image: 'ItemFenceChinese.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 6
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 4
  }]
}, {
  name: 'Valla de paja',
  image: 'ItemFenceDriedStraw.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 10
  }, {
    ...MATERIALS.WOOD,
    quantity: 3
  }]
}, {
  name: 'Valla de Corral',
  image: 'ItemFenceHorizontalWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 6
  }]
}, {
  name: 'Valla de hierro y piedra',
  image: 'ItemFenceIronAndStone.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [
    {
      ...MATERIALS.STONE,
      quantity: 6
    },
    {
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }
  ]
}, {
  name: 'Cerca Oriental',
  image: 'ItemFenceJapanese.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 3
  },
  {
    ...MATERIALS.CLAY,
    quantity: 3
  }, {
    ...MATERIALS.STONE,
    quantity: 3
  }]
}, {
  name: 'Valla celosía',
  image: 'ItemFenceLatiiceNatural.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 8
  }]
}, {
  name: 'Valla leños',
  image: 'ItemFenceLog.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 6
  }]
}, {
  name: 'Valla de madera',
  image: 'ItemFenceNatural.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 6
  }]
}, {
  name: 'Valla Cordón',
  image: 'ItemFencePegRope.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 4
  }]
}, {
  name: 'Valla Puntiaguda',
  image: 'ItemFenceSharply.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 8
  }]
}, {
  name: 'Verja de hierro',
  image: 'ItemFenceSteel.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 6
  }]
}, {
  name: 'Valla de Piedra',
  image: 'ItemFenceStone.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 4
  }]
}, {
  name: 'Valla de Tablones',
  image: 'ItemFenceVerticalWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 8
  }]
}, {
  name: 'Cerca de Ladrillo',
  image: 'ItemFenceWallRenga.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.FENCES,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 6
  }]
}]
