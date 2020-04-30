import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Arreglo Floral con Pie',
    image: 'FtrStandflower.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.FLOWER,
    materials: []
  }, {
    name: 'Cama Rosa',
    image: 'FtrFlowerBedW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.BED],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.ROSE_RED,
      quantity: 10
    }, {
      ...MATERIALS.WOOD,
      quantity: 5
    }]
  }, {
    name: 'Ventilador Anémona',
    image: 'FtrFlowerFan.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.WIND_RED,
      quantity: 3
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 2
    }]
  }, {
    name: 'Lámpara de Jacinto',
    image: 'FtrFlowerLamp.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.JACINT_PURPLE,
      quantity: 5
    }, {
      ...MATERIALS.CLAY,
      quantity: 3
    }]
  }, {
    name: 'Gramófono Lirio',
    image: 'FtrFlowerRecordplayer.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.MUSIC],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.LILY_WHITE,
      quantity: 5
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 3
    }, {
      ...MATERIALS.WOOD,
      quantity: 5
    }]
  }, {
    name: 'Ducha Cosmos',
    image: 'FtrFlowerShower.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.FLOWER,
    materials: []
  }, {
    name: 'Puf Crisantemo',
    image: 'FtrFlowerStoolS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.MUM_YELLOW,
      quantity: 3
    }, {
      ...MATERIALS.HERB,
      quantity: 10
    }]
  }, {
    name: 'Caja sorpresa Tulipán',
    image: 'FtrFlowerSurprisedbox.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.TULIP_RED,
      quantity: 5
    }, {
      ...MATERIALS.FLEXIBLE_WOOD,
      quantity: 3
    }]
  }, {
    name: 'Ramillete Colgante',
    image: 'FtrFlowerSwag.png',
    height: 1,
    width: 1,
    category: [CATEGORY.TABLE_OBJECT],
    serie: SERIES.FLOWER,
    materials: [{
      ...MATERIALS.HERB,
      quantity: 10
    }]
  }, {
    name: 'Mesa Viola',
    image: 'FtrFlowerTableS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.FLOWER,
    materials: []
  }
]
