import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [{
  name: 'Guirnalda de Verano',
  image: 'CapHatSummer0.webp',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.COSMOS_YELLOW,
    quantity: 10
  }]
},
{
  name: 'Guirnalda Anémona',
  image: 'CapOrnamentAnemone1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.WIND_WHITE,
    quantity: 3
  }, {
    ...MATERIALS.WIND_RED,
    quantity: 3
  }, {
    ...MATERIALS.WIND_ORANGE,
    quantity: 3
  }]
},
{
  name: 'Guirnalda Anémona Refinada',
  image: 'CapOrnamentAnemone2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.WIND_BLUE,
    quantity: 5
  }, {
    ...MATERIALS.WIND_PINK,
    quantity: 5
  }]
},
{
  name: 'Guirnalda Anémona Rara',
  image: 'CapOrnamentAnemone3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.WIND_PURPLE,
    quantity: 7
  }]
},
{
  name: 'Guirnalda Cosmos',
  image: 'CapOrnamentCosmos1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.COSMOS_RED,
    quantity: 2
  }, {
    ...MATERIALS.COSMOS_WHITE,
    quantity: 2
  }, {
    ...MATERIALS.COSMOS_YELLOW,
    quantity: 2
  }]
},
{
  name: 'Guirnalda Cosmos Refinada',
  image: 'CapOrnamentCosmos2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.COSMOS_ORANGE,
    quantity: 5
  }, {
    ...MATERIALS.COSMOS_PINK,
    quantity: 5
  }]
},
{
  name: 'Guirnalda Cosmos Negra',
  image: 'CapOrnamentCosmos3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.COSMOS_BLACK,
    quantity: 7
  }]
},
{
  name: 'Guirnalda Jacinto',
  image: 'CapOrnamentHyacinth1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.JACINT_WHITE,
    quantity: 2
  }, {
    ...MATERIALS.JACINT_YELLOW,
    quantity: 2
  }, {
    ...MATERIALS.JACINT_RED,
    quantity: 4
  }]
},
{
  name: 'Guirnalda Jacinto Refinada',
  image: 'CapOrnamentHyacinth2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.JACINT_ORANGE,
    quantity: 2
  }, {
    ...MATERIALS.JACINT_BLUE,
    quantity: 4
  }, {
    ...MATERIALS.JACINT_PINK,
    quantity: 2
  }]
},
{
  name: 'Guirnalda Jacinto Morada',
  image: 'CapOrnamentHyacinth3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.JACINT_PURPLE,
    quantity: 7
  }]
},
{
  name: 'Guirnalda Crisantemo',
  image: 'CapOrnamentMum1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.MUM_RED,
    quantity: 2
  }, {
    ...MATERIALS.MUM_WHITE,
    quantity: 2
  }, {
    ...MATERIALS.MUM_YELLOW,
    quantity: 2
  }]
},
{
  name: 'Guirnalda Crisantemo Refinada',
  image: 'CapOrnamentMum2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.MUM_PINK,
    quantity: 5
  }, {
    ...MATERIALS.MUM_PURPLE,
    quantity: 5
  }]
},
{
  name: 'Guirnalda Crisantemo Verde',
  image: 'CapOrnamentMum3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.MUM_GREEN,
    quantity: 7
  }]
},
{
  name: 'Guirnalda Violeta',
  image: 'CapOrnamentPansy1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.VIOLET_WHITE,
    quantity: 2
  }, {
    ...MATERIALS.VIOLET_RED,
    quantity: 2
  }, {
    ...MATERIALS.VIOLET_YELLOW,
    quantity: 2
  }]
},
{
  name: 'Guirnalda Violeta Refinada',
  image: 'CapOrnamentPansy2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.VIOLET_BLUE,
    quantity: 5
  }, {
    ...MATERIALS.VIOLET_ORANGE,
    quantity: 5
  }]
},
{
  name: 'Guirnalda Violeta Rara',
  image: 'CapOrnamentPansy3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.VIOLET_PURPLE,
    quantity: 7
  }]
},
{
  name: 'Guirnalda Rosa',
  image: 'CapOrnamentRose1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.ROSE_RED,
    quantity: 2
  }, {
    ...MATERIALS.ROSE_WHITE,
    quantity: 2
  }, {
    ...MATERIALS.ROSE_YELLOW,
    quantity: 2
  }]
},
{
  name: 'Guirnalda Rosa Refinada',
  image: 'CapOrnamentRose2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.ROSE_PINK,
    quantity: 5
  }, {
    ...MATERIALS.ROSE_ORANGE,
    quantity: 5
  }]
},
{
  name: 'Guirnalda Rosa Rara',
  image: 'CapOrnamentRose3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.ROSE_PURPLE,
    quantity: 5
  }, {
    ...MATERIALS.ROSE_BLACK,
    quantity: 5
  }]
},
{
  name: 'Guirnalda Rosa Azul',
  image: 'CapOrnamentRose4.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.ROSE_BLUE,
    quantity: 10
  }]
},
{
  name: 'Guirnalda Rosa Dorada',
  image: 'CapOrnamentRose5.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.ROSE_GOLD,
    quantity: 10
  }]
},
{
  name: 'Guirnalda Tulipán',
  image: 'CapOrnamentTulip1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.TULIP_WHITE,
    quantity: 3
  }, {
    ...MATERIALS.TULIP_RED,
    quantity: 3
  }, {
    ...MATERIALS.TULIP_YELLOW,
    quantity: 3
  }]
},
{
  name: 'Guirnalda Tulipán Refinada',
  image: 'CapOrnamentTulip2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
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
},
{
  name: 'Guirnalda Tulipán Rara',
  image: 'CapOrnamentTulip3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.TULIP_BLACK,
    quantity: 10
  }]
},
{
  name: 'Guirnalda Lirios',
  image: 'CapOrnamentYuri1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.LILY_RED,
    quantity: 3
  }, {
    ...MATERIALS.LILY_WHITE,
    quantity: 3
  }, {
    ...MATERIALS.LILY_YELLOW,
    quantity: 3
  }]
},
{
  name: 'Guirnalda Lirios Refinada',
  image: 'CapOrnamentYuri2.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.LILY_PINK,
    quantity: 3
  }, {
    ...MATERIALS.LILY_ORANGE,
    quantity: 3
  }, {
    ...MATERIALS.LILY_WHITE,
    quantity: 3
  }]
},
{
  name: 'Guirnalda Lirios Negra',
  image: 'CapOrnamentYuri3.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.FLOWER,
  materials: [{
    ...MATERIALS.LILY_BLACK,
    quantity: 10
  }]
}
]
