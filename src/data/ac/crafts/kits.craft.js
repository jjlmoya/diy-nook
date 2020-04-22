import MATERIALS from '../materials.data'
import SERIES from '../series.data'

export default [
  {
    name: 'Kit de Puente',
    image: 'BridgeLogReserveKit.png',
    height: 1,
    width: 1,
    category: [/**/],
    serie: SERIES.WOODEN,
    materials: [
      {
        ...MATERIALS.FURNITURE('Lote de Estacas'),
        quantity: 4
      },
      {
        ...MATERIALS.CLAY,
        quantity: 4
      },
      {
        ...MATERIALS.STONE,
        quantity: 4
      }
    ]
  }, {
    name: 'Kit de Campamento',
    image: 'CampsiteReserveKit.png',
    height: 1,
    width: 1,
    category: [/**/],
    serie: SERIES.WOODEN,
    materials: [
      {
        ...MATERIALS.WOOD,
        quantity: 15
      },
      {
        ...MATERIALS.FLEXIBLE_WOOD,
        quantity: 15
      },
      {
        ...MATERIALS.SOLID_WOOD,
        quantity: 15
      },
      {
        ...MATERIALS.IRON_NUGGET,
        quantity: 15
      }
    ]
  }
]
