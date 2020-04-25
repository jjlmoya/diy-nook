import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [
  {
    name: 'Arco Conchas Marina',
    image: 'FtrShellArch.png',
    height: 1,
    width: 1,
    category: [CATEGORY.ARK, CATEGORY.EXTERIOR],
    serie: SERIES.SHELL,
    materials: [
      {
        ...MATERIALS.GIANT_CLAM,
        quantity: 3
      },
      {
        ...MATERIALS.VENUS,
        quantity: 3
      },
      {
        ...MATERIALS.SEA_SHELL,
        quantity: 3
      },
      {
        ...MATERIALS.CORAL,
        quantity: 3
      },
      {
        ...MATERIALS.CAURI,
        quantity: 3
      },
      {
        ...MATERIALS.DOLLAR,
        quantity: 3
      }
    ]
  }, {
    name: 'Cama Conchas Marina',
    image: 'FtrShellBedW.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.BED],
    serie: SERIES.SHELL,
    materials: [{
      ...MATERIALS.GIANT_CLAM,
      quantity: 5
    }, {
      ...MATERIALS.CLAY,
      quantity: 3
    }, {
      ...MATERIALS.STONE,
      quantity: 4
    }]
  }, {
    name: 'Fuente Conchas Marinas',
    image: 'FtrShellFountain.png',
    height: 1,
    width: 1,
    category: [CATEGORY.EXTERIOR],
    serie: SERIES.SHELL,
    materials: [{
      ...MATERIALS.GIANT_CLAM,
      quantity: 5
    }, {
      ...MATERIALS.STONE,
      quantity: 3
    }]
  }, {
    name: 'Lámparita Concha Marina',
    image: 'FtrShellLamp.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
    serie: SERIES.SHELL,
    materials: [
      {
        ...MATERIALS.GIANT_CLAM,
        quantity: 2
      },
      {
        ...MATERIALS.CLAY,
        quantity: 3
      }]
  }, {
    name: 'Altavoz Caracola',
    image: 'FtrShellMusic.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.MUSIC],
    serie: SERIES.SHELL,
    materials: [
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: 2
      },
      {
        ...MATERIALS.SEA_SHELL,
        quantity: 3
      }]
  }, {
    name: 'Mampara Concha Marina',
    image: 'FtrShellScreen.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.SPLITER],
    serie: SERIES.SHELL,
    materials: [
      {
        ...MATERIALS.VENUS,
        quantity: 4
      },
      {
        ...MATERIALS.SEA_SHELL,
        quantity: 4
      }]
  }, {
    name: 'Taburete Concha Marina',
    image: 'FtrShellStoolS.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
    serie: SERIES.SHELL,
    materials: [
      {
        ...MATERIALS.CAURI,
        quantity: 5
      }]
  }, {
    name: 'Mesa Conchas Marinas',
    image: 'FtrShellTableL.png',
    height: 1,
    width: 1,
    category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
    serie: SERIES.SHELL,
    materials: [{
      ...MATERIALS.DOLLAR,
      quantity: 7
    }, {
      ...MATERIALS.CLAY,
      quantity: 3
    }]
  }, {
    name: 'Alfombra Concha Marina',
    image: 'RugOtherShellM00.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CARPET],
    serie: SERIES.SHELL,
    materials: [{
      ...MATERIALS.GIANT_CLAM,
      quantity: 3
    }]
  }
]
