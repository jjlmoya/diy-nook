import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Suelo Otoño',
    image: 'RoomTexFloorAutumun00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.MAPLE,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 5
    }, {
      ...MATERIALS.HERB,
      quantity: 5
    }]
  }, {
    name: 'Suelo Bambú',
    image: 'RoomTexFloorBamboo00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 15
    }]
  }, {
    name: 'Suelo Sótano',
    image: 'RoomTexFloorBasement00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 10
    }]
  }, {
    name: 'Suelo Dinero',
    image: 'RoomTexFloorBill00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.BELLS,
      quantity: '50.000'
    }]
  }, {
    name: 'Suelo Vertedero',
    image: 'RoomTexFloorGarbage00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.TRASH_BOOT,
      quantity: 2
    }, {
      ...MATERIALS.TRASH_CAN,
      quantity: 2
    }, {
      ...MATERIALS.TRASH_WHEEL,
      quantity: 2
    }]
  }, {
    name: 'Suelo Nieve',
    image: 'RoomTexFloorGelande00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 8
    }]
  }, {
    name: 'Suelo dorado',
    image: 'RoomTexFloorGold00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.GOLD_NUGGET,
      quantity: 4
    }]
  }, {
    name: 'Suelo Meloso',
    image: 'RoomTexFloorHoney00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.WASP_NEST,
      quantity: '6'
    }]
  }, {
    name: 'Suelo Jungla',
    image: 'RoomTexFloorJungle00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.HERB,
      quantity: 10
    }, {
      ...MATERIALS.CLAY,
      quantity: 10
    }]
  }, {
    name: 'Suelo Césped',
    image: 'RoomTexFloorLawn00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.GRASS,
    materials: [{
      ...MATERIALS.HERB,
      quantity: 30
    }]
  }, {
    name: 'Suelo Lunar',
    image: 'RoomTexFloorLunar00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Suelo Bosque de Setas',
    image: 'RoomTexFloorMushForest00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.MUSHROOM,
    materials: [{
      ...MATERIALS.TRUFFLE,
      quantity: 1
    }, {
      ...MATERIALS.HERB,
      quantity: 10
    }, {
      ...MATERIALS.THIN_MUSHROOM,
      quantity: 2
    }, {
      ...MATERIALS.FLAT_MUSHROOM,
      quantity: 2
    }]
  }, {
    name: 'Suelo Playa Tropical',
    image: 'RoomTexFloorSand00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.SHELL,
    materials: [{
      ...MATERIALS.VENUS,
      quantity: 1
    }, {
      ...MATERIALS.CAURI,
      quantity: 1
    }, {
      ...MATERIALS.CORAL,
      quantity: 1
    }, {
      ...MATERIALS.SEA_SHELL,
      quantity: 1
    }, {
      ...MATERIALS.DOLLAR,
      quantity: 1
    }]
  }, {
    name: 'Suelo Estrellas Plateadas',
    image: 'RoomTexFloorSandStar00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Suelo Acero',
    image: 'RoomTexFloorSteel00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 7
    }]
  }, {
    name: 'Pared Manzanas',
    image: 'RoomTexWallApple00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.APPLE,
      quantity: 20
    }]
  }, {
    name: 'Pared Bambú',
    image: 'RoomTexWallBamboo00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 15
    }]
  }, {
    name: 'Pared Sótano',
    image: 'RoomTexWallBasement00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 10
    }]
  }, {
    name: 'Panelado madera nudosa',
    image: 'RoomTexWallCedar00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 15
    }]
  }, {
    name: 'Pared Cerezas',
    image: 'RoomTexWallCherry00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.CHERRY,
      quantity: 20
    }]
  }, {
    name: 'Pared Bosque Bambú',
    image: 'RoomTexWallChikurin00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 7
    }, {
      ...MATERIALS.BAMBU_ROOT,
      quantity: 3
    }]
  }, {
    name: 'Pared Leña',
    image: 'RoomTexWallFireWood00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: []
  }, {
    name: 'Pared Oriental',
    image: 'RoomTexWallFusumaGorgeous00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.FURNITURE('Pared Bruma Oriental'),
      quantity: 1
    }, {
      ...MATERIALS.GOLD_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Pared Vertedero',
    image: 'RoomTexWallGarbage00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.TRASH_BOOT,
      quantity: 2
    }, {
      ...MATERIALS.TRASH_CAN,
      quantity: 2
    }, {
      ...MATERIALS.TRASH_WHEEL,
      quantity: 2
    }]
  }, {
    name: 'Pared Dorada',
    image: 'RoomTexWallGold00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.GOLD,
    materials: []
  }, {
    name: 'Pared Espiga Clara',
    image: 'RoomTexWallHerringbone00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [
      {
        ...MATERIALS.FLEXIBLE_WOOD,
        quantity: 15
      }]
  }, {
    name: 'Pared Espiga Oscura',
    image: 'RoomTexWallHerringbone01.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 15
    }]
  }, {
    name: 'Pared Melosa',
    image: 'RoomTexWallHoney00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.WASP_NEST,
      quantity: 6
    }]
  }, {
    name: 'Pared Iceberg',
    image: 'RoomTexWallIceFloe00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 10
    }]
  }, {
    name: 'Pared Selva',
    image: 'RoomTexWallJukai00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.HERB,
      quantity: 15
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 9
    }]
  }, {
    name: 'Pared Jungla',
    image: 'RoomTexWallJungle00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.HERB,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 3
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }, {
      ...MATERIALS.SOLID_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Pared Biblioteca Clásica',
    image: 'RoomTexWallLibrary00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.FURNITURE('Libro'),
      quantity: 10
    }]
  }, {
    name: 'Pared Biblioteca de Manga',
    image: 'RoomTexWallLibrary01.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.FURNITURE('Revista'),
      quantity: 10
    }]
  }, {
    name: 'Pared Cabaña',
    image: 'RoomTexWallLog00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.LOG,
    materials: []
  }, {
    name: 'Pared Madera Flexible',
    image: 'RoomTexWallMixPlankWood00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.BLOCK,
    materials: [{
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 15
    }]
  }, {
    name: 'Pared Madera Rígida',
    image: 'RoomTexWallMixPlankWood01.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 15
    }]
  }, {
    name: 'Pared Madera',
    image: 'RoomTexWallMixwood00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.WOODEN,
    materials: [{
      ...MATERIALS.WOOD,
      quantity: 15
    }]
  }, {
    name: 'Pared Setas',
    image: 'RoomTexWallMush00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.MUSHROOM,
    materials: [{
      ...MATERIALS.ELEGANT_MUSHROOM,
      quantity: 1
    }, {
      ...MATERIALS.ROUND_MUSHROOM,
      quantity: 1
    }, {
      ...MATERIALS.THIN_MUSHROOM,
      quantity: 1
    }, {
      ...MATERIALS.FLAT_MUSHROOM,
      quantity: 1
    }]
  }, {
    name: 'Pared Bosque de Setas',
    image: 'RoomTexWallMushForest00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.MUSHROOM,
    materials: [{
      ...MATERIALS.ELEGANT_MUSHROOM,
      quantity: 1
    }, {
      ...MATERIALS.ROUND_MUSHROOM,
      quantity: 1
    }, {
      ...MATERIALS.THIN_MUSHROOM,
      quantity: 1
    }, {
      ...MATERIALS.FLAT_MUSHROOM,
      quantity: 1
    }, {
      ...MATERIALS.WOOD,
      quantity: 10
    }]
  }, {
    name: 'Pared Naranjas',
    image: 'RoomTexWallOrange00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.ORANGE,
      quantity: 20
    }]
  }, {
    name: 'Pared Melocotones',
    image: 'RoomTexWallPeach00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEACH,
      quantity: 20
    }]
  }, {
    name: 'Pared Peras',
    image: 'RoomTexWallPear00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.FRUIT,
    materials: [{
      ...MATERIALS.PEAR,
      quantity: 20
    }]
  }, {
    name: 'Pared Copo de Nieve',
    image: 'RoomTexWallSnowCrystal00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 12
    }]
  }, {
    name: 'Pared Viga de Hierro',
    image: 'RoomTexWallSteel00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 8
    }]
  }, {
    name: 'Pared Piedra rústica',
    image: 'RoomTexWallStone00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.STONE,
    materials: [{
      ...MATERIALS.STONE,
      quantity: 5
    }, {
      ...MATERIALS.CLAY,
      quantity: 5
    }]
  }, {
    name: 'Pared madera de deriva',
    image: 'RoomTexWallWildWood00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: []
  },
  {
    name: 'Suelo Acuario',
    image: 'RoomSpFloorFishTank00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.NOOK,
    materials: []
  }, {
    name: 'Suelo Galaxia',
    image: 'RoomSpFloorGalaxy00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Suelo Hielo',
    image: 'RoomSpFloorIce00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 8
    }, {
      ...MATERIALS.ICE_XL,
      quantity: 1
    }]
  }, {
    name: 'Suelo Iceberg',
    image: 'RoomSpFloorIceFloe00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.ICE,
      quantity: 10
    }]
  }, {
    name: 'Suelo Nave Espacial',
    image: 'RoomSpFloorSF00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Suelo Agua',
    image: 'RoomSpFloorWater00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FLOOR],
    serie: SERIES.NOOK,
    materials: []
  }, {
    name: 'Pared Otoño',
    image: 'RoomSpWallAutumun00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.MAPLE,
    materials: [{
      ...MATERIALS.MAPLE,
      quantity: 10
    }, {
      ...MATERIALS.HERB,
      quantity: 15
    }]
  }, {
    name: 'Pared Pecera',
    image: 'RoomSpWallFishTank00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.NOOK,
    materials: []
  }, {
    name: 'Pared Nieve',
    image: 'RoomSpWallGelande00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.ICE,
    materials: []
  }, {
    name: 'Pared Hielo',
    image: 'RoomSpWallIce00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.ICE,
    materials: []
  }, {
    name: 'Pared Nave Espacial',
    image: 'RoomSpWallSF00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Pared Estrellas Plateadas',
    image: 'RoomSpWallStarPrint00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Pared Suelo Estrellado',
    image: 'RoomSpWallStarSky00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 5
    }, {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Pared Playa Tropical',
    image: 'RoomSpWallTropical00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.SHELL,
    materials: [{
      ...MATERIALS.VENUS,
      quantity: 1
    }, {
      ...MATERIALS.CAURI,
      quantity: 1
    }, {
      ...MATERIALS.CORAL,
      quantity: 1
    }, {
      ...MATERIALS.SEA_SHELL,
      quantity: 1
    }, {
      ...MATERIALS.DOLLAR,
      quantity: 1
    }]
  }, {
    name: 'Pared Navideña',
    image: 'RoomSpWallXmas00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL],
    serie: SERIES.LIGHT,
    materials: []
  }
]
