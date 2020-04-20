import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Escudo de Armas',
    image: 'FtrDoorOrnamentCrest.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL_OBJECT, CATEGORY.DOOR],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }]
  }, {
    name: 'Placa Fósil',
    image: 'FtrDoorOrnamentFossil.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL_OBJECT, CATEGORY.DOOR],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.FOSSIL,
      quantity: 1
    }, {
      ...MATERIALS.STONE,
      quantity: 2
    }]
  }, {
    name: 'Placa de Hierro',
    image: 'FtrDoorOrnamentIron.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Placa Leña',
    image: 'FtrDoorOrnamentLog.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.LOG,
    materials: [{
      ...MATERIALS.WOOD,
      quantity: 6
    }, {
      ...MATERIALS.ROSE_PINK,
      quantity: 1
    }]
  }, {
    name: 'Placa Huella',
    image: 'FtrDoorOrnamentPaw.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.WOOD,
      quantity: 3
    }]
  }, {
    name: 'Corona Anémona A',
    image: 'FtrDoorOrnamentWreathAnemone.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.WIND_ORANGE,
      quantity: 3
    }, {
      ...MATERIALS.WIND_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.WIND_RED,
      quantity: 3
    }]
  }, {
    name: 'Corona Anémona Mix',
    image: 'FtrDoorOrnamentWreathAnemoneMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.WIND_BLUE,
      quantity: 3
    }, {
      ...MATERIALS.WIND_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.WIND_PINK,
      quantity: 3
    }]
  }, {
    name: 'Corona Anémona Rara',
    image: 'FtrDoorOrnamentWreathAnemoneRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.WIND_PURPLE,
      quantity: 10
    }]
  }, {
    name: 'Corona de Ramas',
    image: 'FtrDoorOrnamentWreathBranch.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.BRANCH,
      quantity: 10
    }]
  }, {
    name: 'Corona Cosmos',
    image: 'FtrDoorOrnamentWreathCosmos.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.COSMOS_RED,
      quantity: 3
    }, {
      ...MATERIALS.COSMOS_YELLOW,
      quantity: 3
    }, {
      ...MATERIALS.COSMOS_WHITE,
      quantity: 3
    }]
  }, {
    name: 'Corona Cosmos Mix',
    image: 'FtrDoorOrnamentWreathCosmosMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.COSMOS_RED,
      quantity: 3
    }, {
      ...MATERIALS.COSMOS_PINK,
      quantity: 3
    }, {
      ...MATERIALS.COSMOS_ORANGE,
      quantity: 3
    }]
  }, {
    name: 'Corona Cosmos Raros',
    image: 'FtrDoorOrnamentWreathCosmosRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.COSMOS_BLACK,
      quantity: 10
    }]
  }, {
    name: 'Corona de Frutas',
    image: 'FtrDoorOrnamentWreathFruit.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.PEACH,
      quantity: 2
    }, {
      ...MATERIALS.APPLE,
      quantity: 2
    }, {
      ...MATERIALS.COCONUT,
      quantity: 2
    }, {
      ...MATERIALS.CHERRY,
      quantity: 2
    }, {
      ...MATERIALS.PEAR,
      quantity: 2
    }]
  }, {
    name: 'Corona de Jacintos',
    image: 'FtrDoorOrnamentWreathHyacinth.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.JACINT_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.JACINT_YELLOW,
      quantity: 3
    }, {
      ...MATERIALS.JACINT_RED,
      quantity: 3
    }]
  }, {
    name: 'Corona Jacintos Mezcla',
    image: 'FtrDoorOrnamentWreathHyacinthMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.JACINT_BLUE,
      quantity: 3
    }, {
      ...MATERIALS.JACINT_PINK,
      quantity: 3
    }, {
      ...MATERIALS.JACINT_ORANGE,
      quantity: 3
    }]
  }, {
    name: 'Corona Jacintos Raros',
    image: 'FtrDoorOrnamentWreathHyacinthRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.JACINT_PURPLE,
      quantity: 10
    }]
  }, {
    name: 'Corona de Hielo',
    image: 'FtrDoorOrnamentWreathIce.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.ICE,
    materials: []
  }, {
    name: 'Corona de Crisantemos',
    image: 'FtrDoorOrnamentWreathMum.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.MUM_RED,
      quantity: 3
    }, {
      ...MATERIALS.MUM_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.MUM_YELLOW,
      quantity: 3
    }]
  }, {
    name: 'Corona Crisantemos Mezcla',
    image: 'FtrDoorOrnamentWreathMumMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.MUM_ORANGE,
      quantity: 3
    }, {
      ...MATERIALS.MUM_PINK,
      quantity: 3
    }, {
      ...MATERIALS.MUM_PURPLE,
      quantity: 3
    }]
  }, {
    name: 'Corona Crisantemos Raros',
    image: 'FtrDoorOrnamentWreathMumRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.MUM_GREEN,
      quantity: 10
    }]
  }, {
    name: 'Corona Setas',
    image: 'FtrDoorOrnamentWreathMushroom.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.MUSHROOM,
    materials: []
  }, {
    name: 'Corona Navideña',
    image: 'FtrDoorOrnamentWreathOrnament.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.ICE,
    materials: []
  }, {
    name: 'Corona Viola',
    image: 'FtrDoorOrnamentWreathPansy.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.VIOLET_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.VIOLET_YELLOW,
      quantity: 3
    }, {
      ...MATERIALS.VIOLET_RED,
      quantity: 3
    }]
  }, {
    name: 'Corona Viola Mix',
    image: 'FtrDoorOrnamentWreathPansyMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.VIOLET_ORANGE,
      quantity: 3
    }, {
      ...MATERIALS.VIOLET_BLUE,
      quantity: 3
    }, {
      ...MATERIALS.VIOLET_YELLOW,
      quantity: 3
    }]
  }, {
    name: 'Corona Viola Rara',
    image: 'FtrDoorOrnamentWreathPansyRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.VIOLET_BLUE,
      quantity: 5
    }, {
      ...MATERIALS.VIOLET_PURPLE,
      quantity: 5
    }]
  }, {
    name: 'Corona Rosa',
    image: 'FtrDoorOrnamentWreathRose.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.ROSE_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.ROSE_RED,
      quantity: 3
    }, {
      ...MATERIALS.ROSE_YELLOW,
      quantity: 3
    }]
  }, {
    name: 'Corona Rosa Dorada',
    image: 'FtrDoorOrnamentWreathRoseGold.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.ROSE_GOLD,
      quantity: 10
    }]
  }, {
    name: 'Corona Rosa Mezcla',
    image: 'FtrDoorOrnamentWreathRoseMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.ROSE_PINK,
      quantity: 3
    }, {
      ...MATERIALS.ROSE_ORANGE,
      quantity: 3
    }, {
      ...MATERIALS.ROSE_YELLOW,
      quantity: 3
    }]
  }, {
    name: 'Corona Rosa Rara',
    image: 'FtrDoorOrnamentWreathRoseRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.ROSE_PURPLE,
      quantity: 5
    }, {
      ...MATERIALS.ROSE_BLACK,
      quantity: 5
    }]
  }, {
    name: 'Corona Rosa Ultra Rara',
    image: 'FtrDoorOrnamentWreathRoseUrtraRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.ROSE_BLUE,
      quantity: 10
    }]
  }, {
    name: 'Corona Conchas',
    image: 'FtrDoorOrnamentWreathShell.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.SHELL,
    materials: [
      {
        ...MATERIALS.GIANT_CLAM,
        quantity: 1
      },
      {
        ...MATERIALS.VENUS,
        quantity: 1
      },
      {
        ...MATERIALS.SEA_SHELL,
        quantity: 1
      },
      {
        ...MATERIALS.CORAL,
        quantity: 1
      },
      {
        ...MATERIALS.CAURI,
        quantity: 1
      },
      {
        ...MATERIALS.DOLLAR,
        quantity: 1
      }]
  }, {
    name: 'Corona Tulipán',
    image: 'FtrDoorOrnamentWreathTulip.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.TULIP_RED,
      quantity: 3
    }, {
      ...MATERIALS.TULIP_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.TULIP_YELLOW,
      quantity: 3
    }]
  }, {
    name: 'Corona Tulipán Mezcla',
    image: 'FtrDoorOrnamentWreathTulipMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.TULIP_PINK,
      quantity: 3
    }, {
      ...MATERIALS.TULIP_ORANGE,
      quantity: 3
    }, {
      ...MATERIALS.TULIP_PURPLE,
      quantity: 3
    }]
  }, {
    name: 'Corona Tulipán Rara',
    image: 'FtrDoorOrnamentWreathTulipRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.TULIP_BLACK,
      quantity: 10
    }]
  }, {
    name: 'Corona Lirio',
    image: 'FtrDoorOrnamentWreathYuri.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.LILY_WHITE,
      quantity: 3
    }, {
      ...MATERIALS.LILY_RED,
      quantity: 3
    }, {
      ...MATERIALS.LILY_YELLOW,
      quantity: 3
    }]
  }, {
    name: 'Corona Lirio Mezcla',
    image: 'FtrDoorOrnamentWreathYuriMix.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.LILY_PINK,
      quantity: 3
    }, {
      ...MATERIALS.LILY_YELLOW,
      quantity: 3
    }, {
      ...MATERIALS.LILY_ORANGE,
      quantity: 3
    }]
  }, {
    name: 'Corona Lirio Raro',
    image: 'FtrDoorOrnamentWreathYuriRare.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.LILY_BLACK,
      quantity: 10
    }]
  }, {
    name: 'Placa Bienvenida Hueso',
    image: 'FtrDoorPlateBone.png',
    height: 1,
    width: 1,
    category: [],
    serie: SERIES.NOOK,
    materials: [{
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }
]
