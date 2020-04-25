import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Mochila Cesta',
    image: 'BagBackpackBasket0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.BAG],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 6
    }]
  },
  {
    name: 'Esfera de Bambú',
    image: 'FtrBambooBall.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 3
    }]
  }, {
    name: 'Cesta de Bambú',
    image: 'FtrBambooBasket.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 7
    }]
  }, {
    name: 'Portavelas de Bambú',
    image: 'FtrBambooCandle.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 3
    }, {
      ...MATERIALS.CLAY,
      quantity: 2
    }]
  }, {
    name: 'Barrera de Bambú',
    image: 'FtrBambooCarstop.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.SHELVE],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 3
    }]
  }, {
    name: 'Banco de Bambú',
    image: 'FtrBambooChairL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 8
    }]
  }, {
    name: 'Xilófono de Bambú',
    image: 'FtrBamboodrum.png',
    height: 1,
    width: 1,
    category: [CATEGORY.MUSIC, CATEGORY.TABLE_OBJECT],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 3
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 2
    }]
  }, {
    name: 'Adorno colgante de Bambú',
    image: 'FtrBambooFlowerwall.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL_OBJECT],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 1
    }]
  }, {
    name: 'Lámpara de Bambú',
    image: 'FtrBambooLamp.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 8
    }]
  }, {
    name: 'Kit Acampada Bamboo',
    image: 'FtrBambooLunch.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL_OBJECT],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 3
    }]
  }, {
    name: 'Altavoz de Bambú',
    image: 'FtrBambooMusic.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.MUSIC],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 3
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 1
    }]
  }, {
    name: 'Separador de Bambú',
    image: 'FtrBambooScreen.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.SPLITTER],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 7
    }, {
      ...MATERIALS.STONE,
      quantity: 6
    }]
  }, {
    name: 'Estante de Bambú',
    image: 'FtrBambooShelf.png',
    height: 1,
    width: 1,
    category: [CATEGORY.SHELVE, CATEGORY.FURNITURE],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 15
    }]
  }, {
    name: 'Lámpara Brote de Bambú',
    image: 'FtrBambooshootLamp.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 4
    }, {
      ...MATERIALS.BAMBU_ROOT,
      quantity: 5
    }, {
      ...MATERIALS.CLAY,
      quantity: 4
    }]
  }, {
    name: 'Canal de Bambú para Fideos',
    image: 'FtrBambooSomen.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 7
    }, {
      ...MATERIALS.WOOD,
      quantity: 3
    }]
  }, {
    name: 'Taburete de Bambú',
    image: 'FtrBambooStool.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 5
    }]
  }, {
    name: 'Ornamento de Bambú',
    image: 'FtrBambooSurprisedbox.png',
    height: 1,
    width: 1,
    category: [CATEGORY.LAMP, CATEGORY.FURNITURE],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 6
    }]
  },
  {
    name: 'Alfombra Bambú Clara',
    image: 'RugRectBambooM00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 6
    }]
  }, {
    name: 'Alfombra Bambú Oscura',
    image: 'RugRectBambooM01.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 6
    }]
  }, {
    name: 'Set de vaporera apilables',
    image: 'FtrBasketsteamer.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU_SPRING,
      quantity: 6
    }]
  }, {
    name: 'Hogar',
    image: 'FtrIrori.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.BAMBOO,
    materials: [{
      ...MATERIALS.BAMBU,
      quantity: 2
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 5
    }, {
      ...MATERIALS.CLAY,
      quantity: 4
    }, {
      ...MATERIALS.SOLID_WOOD,
      quantity: 5
    }]
  }
]
