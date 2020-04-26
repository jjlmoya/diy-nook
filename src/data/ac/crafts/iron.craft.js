import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Armario de Hierro',
    image: 'FtrIronClosetLR.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.WARDROBE],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 12
    }]
  }, {
    name: 'Torre de Vigas',
    image: 'FtrIronframe.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 20
    }]
  }, {
    name: 'Banco de Forja',
    image: 'FtrIrongardenBench.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR, CATEGORY.CHAIR],
    serie: SERIES.GARDEN,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 8
    }]
  }, {
    name: 'Silla de Forja',
    image: 'FtrIrongardenChair.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR, CATEGORY.CHAIR],
    serie: SERIES.GARDEN,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 8
    }]
  }, {
    name: 'Mesa de Forja',
    image: 'FtrIrongardenTable.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR, CATEGORY.TABLE],
    serie: SERIES.GARDEN,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 5
    }]
  }, {
    name: 'Perchero de Hierro',
    image: 'FtrIronHanger.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.IRON,
    materials: []
  }, {
    name: 'Aplique de Hierro',
    image: 'FtrIronLampW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.WALL_OBJECT, CATEGORY.LAMP],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 4
    }, {
      ...MATERIALS.CLAY,
      quantity: 2
    }]
  }, {
    name: 'Estantería de Hierro',
    image: 'FtrIronShelf.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.WARDROBE],
    serie: SERIES.IRON,
    materials: []
  }, {
    name: 'Estante de Hierro',
    image: 'FtrIronShelfW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.WARDROBE],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 14
    }]
  }, {
    name: 'Escritorio de Hierro',
    image: 'FtrIronTableM.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.DESKTOP, CATEGORY.TABLE],
    serie: SERIES.IRON,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 10
    }]
  }, {
    name: 'Cama Universidad',
    image: 'FtrIronwoodBedS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.BED],
    serie: SERIES.UNIVERSIDAD,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 20
    }]
  }, {
    name: 'Taburete Universidad',
    image: 'FtrIronwoodChairS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.UNIVERSIDAD,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }, {
      ...MATERIALS.WOOD,
      quantity: 3
    }]
  }, {
    name: 'Cómoda de Universidad',
    image: 'FtrIronwoodChest.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHEST],
    serie: SERIES.UNIVERSIDAD,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 4
    }, {
      ...MATERIALS.WOOD,
      quantity: 7
    }]
  }, {
    name: 'Reloj de Universidad',
    image: 'FtrIronwoodClockW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOCK, CATEGORY.WALL_OBJECT],
    serie: SERIES.UNIVERSIDAD,
    materials: [
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: 2
      }, {
        ...MATERIALS.WOOD,
        quantity: 2
      }
    ]
  }, {
    name: 'Aparador Universidad',
    image: 'FtrIronwoodCupboard.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.KITCHEN],
    serie: SERIES.UNIVERSIDAD,
    materials: [
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: '6'
      }, {
        ...MATERIALS.WOOD,
        quantity: '12'
      }, {
        ...MATERIALS.FURNITURE('Cómoda Universidad'),
        quantity: '1'
      }
    ]
  }, {
    name: 'Fregadero Universidad',
    image: 'FtrIronwoodKitchen.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.KITCHEN],
    serie: SERIES.UNIVERSIDAD,
    materials: [{
      ...MATERIALS.WOOD,
      quantity: 4
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }, {
      ...MATERIALS.FURNITURE('Cómoda Universal'),
      quantity: 1
    }, {
      ...MATERIALS.FURNITURE('Tabla de Cortar Sencilla'),
      quantity: 1
    }]
  }, {
    name: 'Carrito Universidad',
    image: 'FtrIronwoodServingcart.png',
    height: 1,
    width: 1,
    category: [CATEGORY.SHELVE, CATEGORY.FURNITURE],
    serie: SERIES.UNIVERSIDAD,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 4
    }, {
      ...MATERIALS.WOOD,
      quantity: 6
    }]
  }, {
    name: 'Mesa Grande Universidad',
    image: 'FtrIronwoodTableL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.UNIVERSIDAD,
    materials: [{
      ...MATERIALS.IRON_NUGGET,
      quantity: 6
    }, {
      ...MATERIALS.WOOD,
      quantity: 12
    }]
  }, {
    name: 'Mesa Universidad',
    image: 'FtrIronwoodTableM.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.UNIVERSIDAD,
    materials: [
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: '4'
      }, {
        ...MATERIALS.WOOD,
        quantity: '6'
      }]
  }
]
