import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

const WEAK_AXE = {
  name: 'Hacha Endeble',
  image: 'ToolAxeStone.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TOOL],
  serie: SERIES.TOOLS,
  materials: [
    {
      ...MATERIALS.BRANCH,
      quantity: 5
    },
    {
      ...MATERIALS.STONE,
      quantity: 1
    }
  ]
}

const STONE_AXE = {
  name: 'Hacha de piedra',
  image: 'ToolAxeStoneNormal.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TOOL],
  serie: SERIES.TOOLS,
  materials: [
    {
      ...MATERIALS.WEAK_AXE,
      quantity: 1
    },
    {
      ...MATERIALS.WOOD,
      quantity: 3
    }
  ]
}

const AXE = {
  name: 'Hacha',
  image: 'ToolAxe.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TOOL],
  serie: SERIES.TOOLS,
  materials: [
    {
      ...MATERIALS.WEAK_AXE,
      quantity: 1
    },
    {
      ...MATERIALS.WOOD,
      quantity: 3
    },
    {
      ...MATERIALS.IRON_NUGGET,
      quantity: 1
    }
  ]
}

const GOLD_AXE = {
  name: 'Hacha de oro',
  image: 'ToolAxeGold.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TOOL],
  serie: SERIES.TOOLS,
  materials: [
    {
      ...MATERIALS.GOLD_NUGGET,
      quantity: 1
    },
    {
      ...MATERIALS.AXE,
      quantity: 1
    }

  ]
}

export default [
  WEAK_AXE,
  STONE_AXE,
  AXE,
  GOLD_AXE,
  {
    name: 'Caña de Pescar',
    image: 'ToolAngling.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],
    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.WEAK_FISHING_ROD,
        quantity: 1
      },
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: 1
      }
    ]
  }, {
    name: 'Varita Estrella',
    image: 'ToolChangeStick.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.SPACE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 1
    },
    {
      ...MATERIALS.STAR_FRAGMENT_XL,
      quantity: 1
    }]
  }, {
    name: 'Caña Dorada',
    image: 'ToolFishingrodGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.FISHING_ROD,
        quantity: 1
      },
      {
        ...MATERIALS.GOLD_NUGGET,
        quantity: 1
      }
    ]
  }, {
    name: 'Caña Endeble',
    image: 'ToolFishingrodWood.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.BRANCH,
        quantity: 5
      }
    ]
  }, {
    name: 'Escalera',
    image: 'ToolLadder.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.WOOD,
        quantity: 4
      },
      {
        ...MATERIALS.FLEXIBLE_WOOD,
        quantity: 4
      },
      {
        ...MATERIALS.SOLID_WOOD,
        quantity: 4
      }
    ]
  }, {
    name: 'Red Endeble',
    image: 'ToolNet.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.BRANCH,
        quantity: 5
      }
    ]
  }, {
    name: 'Red Dorada',
    image: 'ToolNetGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.NET,
        quantity: 1
      },
      {
        ...MATERIALS.GOLD_NUGGET,
        quantity: 1
      }
    ]
  }, {
    name: 'Red',
    image: 'ToolNetNormal.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.WEAK_NET,
        quantity: 1
      },
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: 1
      }
    ]
  }, {
    name: 'Ocarina',
    image: 'ToolOcarina.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.MUSIC],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.CLAY,
        quantity: 5
      }
    ]
  }, {
    name: 'Sicu',
    image: 'ToolPanpipe.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.MUSIC],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.BAMBU_SPRING,
        quantity: 7
      }
    ]
  }, {
    name: 'Pala',
    image: 'ToolScoop.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [{
      ...MATERIALS.WEAK_SHOVEL,
      quantity: 1
    },
    {
      ...MATERIALS.IRON_NUGGET,
      quantity: 1
    }]
  }, {
    name: 'Pala Dorada',
    image: 'ToolScoopGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [{
      ...MATERIALS.SHOVEL,
      quantity: 1
    },
    {
      ...MATERIALS.GOLD_NUGGET,
      quantity: 1
    }]
  }, {
    name: 'Pala Endeble',
    image: 'ToolShovelWood.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 5
    }]
  }, {
    name: 'Tirachinas',
    image: 'ToolSlingshot.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [{
      ...MATERIALS.SOLID_WOOD,
      quantity: 5
    }]
  }, {
    name: 'Tirachinas Dorado',
    image: 'ToolSlingshotGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [{
      ...MATERIALS.SLINGSHOT,
      quantity: 1
    },
    {
      ...MATERIALS.GOLD_NUGGET,
      quantity: 1
    }]
  }, {
    name: 'Varita de Anémona',
    image: 'ToolStickAnemones.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.WIND_ORANGE,
      quantity: 1
    }]
  }, {
    name: 'Varita de Bambú',
    image: 'ToolStickBamboo.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 6
    },
    {
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }]
  }, {
    name: 'Varita de Crisantemo',
    image: 'ToolStickChrysanthemum.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.MUM_YELLOW,
      quantity: 1
    }]
  }, {
    name: 'Varita Cosmos',
    image: 'ToolStickCosmos.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.COSMOS_WHITE,
      quantity: 1
    }]
  }, {
    name: 'Vara Dorada',
    image: 'ToolStickGolden.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.GOLD,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.GOLD_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Vara de Jacinto',
    image: 'ToolStickHyacinth.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.JACINT_PINK,
      quantity: 1
    }]
  }, {
    name: 'Vara de hierro',
    image: 'ToolStickIron.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    },
    {
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }]
  }, {
    name: 'Varita de setas',
    image: 'ToolStickMushroom.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.MUSHROOM,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.ELEGANT_MUSHROOM,
      quantity: 3
    }]
  }, {
    name: 'Varita de viola',
    image: 'ToolStickPansy.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.VIOLET_YELLOW,
      quantity: 1
    }]
  }, {
    name: 'Varita de Rosa',
    image: 'ToolStickRose.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.ROSE_RED,
      quantity: 1
    }]
  }, {
    name: 'Varita de Conchas',
    image: 'ToolStickShell.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.SHELL,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.SUMMER_SHELL,
      quantity: 3
    }]
  }, {
    name: 'Varita de Nieve',
    image: 'ToolStickSnow.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.ICE,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.ICE,
      quantity: 1
    }]
  }, {
    name: 'Varita de Árbol',
    image: 'ToolStickTree.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.TOOLS,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.BRANCH,
      quantity: 5
    }]
  }, {
    name: 'Varita de Tulipán',
    image: 'ToolStickTulip.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.TULIP_RED,
      quantity: 1
    }]
  }, {
    name: 'Varita de Madera',
    image: 'ToolStickWood.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.TOOLS,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 2
    }]
  }, {
    name: 'Varita de Lirio',
    image: 'ToolStickYuri.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL, CATEGORY.WAND],

    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }, {
      ...MATERIALS.LILY_WHITE,
      quantity: 1
    }]
  }, {
    name: 'Regadera',
    image: 'ToolWatering.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.WEAK_WATER_CANING,
        quantity: 1
      },
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: 1
      }
    ]
  }, {
    name: 'Regadera de Oro',
    image: 'ToolWateringGold.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.WATER_CANING,
        quantity: 1
      },
      {
        ...MATERIALS.GOLD_NUGGET,
        quantity: 1
      }
    ]
  }, {
    name: 'Regadera Endeble',
    image: 'ToolWateringWood.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TOOL],

    serie: SERIES.TOOLS,
    materials: [
      {
        ...MATERIALS.FLEXIBLE_WOOD,
        quantity: 5
      }
    ]
  }
]
