import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

const getEasterMaterials = ({ sky, earth, forest, rock, water, wooden }) => {
  return [
    {
      ...MATERIALS.SKY_EGG,
      quantity: sky
    },
    {
      ...MATERIALS.EARTH_EGG,
      quantity: earth
    }, {
      ...MATERIALS.FOREST_EGG,
      quantity: forest
    }, {
      ...MATERIALS.ROCK_EGG,
      quantity: rock
    }, {
      ...MATERIALS.WATER_EGG,
      quantity: water
    }, {
      ...MATERIALS.WOODEN_EGG,
      quantity: wooden
    }].filter(e => e.quantity)
}
export default [{
  name: 'Traje de huevo Celeste',
  image: 'TopsTexOnepieceRibNEggsky0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ water: 3 })
},
{
  name: 'Traje de Huevo Rupestre',
  image: 'TopsTexOnepieceRibNEggrock0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ rock: 3 })
},
{
  name: 'Traje de Huevo Boscoso',
  image: 'TopsTexOnepieceRibNEggleaf0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ forest: 3 })
},
{
  name: 'Traje de Huevo Terrestre',
  image: 'TopsTexOnepieceRibNEggground0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ earth: 3 })
},
{
  name: 'Traje de Huevo Leñoso',
  image: 'TopsTexOnepieceRibNEggforest0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ wooden: 3 })
},
{
  name: 'Traje de huevo Acuático',
  image: 'TopsTexOnepieceRibNEggfish0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ water: 3 })
},
{
  name: 'Vestido de fiesta huevo',
  image: 'TopsTexOnepieceBalloonLEgg0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 3, earth: 3, forest: 3, rock: 3, water: 3, wooden: 3 })
},
{
  name: 'Varita Caza del Huevo',
  image: 'ToolStickEgg.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TOOL, CATEGORY.WAND],
  serie: SERIES.EASTER,
  materials: [
    {
      ...MATERIALS.FURNITURE('Tentetieso Coti Conejal'),
      quantity: 1
    }, {
      ...MATERIALS.STAR_FRAGMENT,
      quantity: 3
    }
  ]
},
{
  name: 'Zapato de huevo Celeste',
  image: 'ShoesLowcutEggsky0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 2 })
},
{
  name: 'Zapato de huevo Rupestre',
  image: 'ShoesLowcutEggrock0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ rock: 2 })
},
{
  name: 'Zapato de huevo Boscoso',
  image: 'ShoesLowcutEggleaf0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ forest: 2 })
},
{
  name: 'Zapato de huevo Terrestre',
  image: 'ShoesLowcutEggground0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ earth: 2 })
},
{
  name: 'Zapato de huevo Leñoso',
  image: 'ShoesLowcutEggforest0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ wooden: 2 })
},
{
  name: 'Zapato de huevo Acuático',
  image: 'ShoesLowcutEggfish0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ water: 2 })
},
{
  name: 'Valla Caza del Huevo',
  image: 'ItemFenceEgg.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FENCES],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1, rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Alfombra Caza del Huevo',
  image: 'RugOtherEasterM00.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CARPET],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1, rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Pared Caza del Huevo',
  image: 'RoomTexWallEaster00.png',
  height: 1,
  width: 1,
  category: [CATEGORY.WALL],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 2, earth: 2, forest: 2, rock: 2, water: 2, wooden: 2 })
},
{
  name: 'Suelo Caza del Huevo',
  image: 'RoomTexFloorEaster00.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FLOOR],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 2, earth: 2, forest: 2, rock: 2, water: 2, wooden: 2 })
},
{
  name: 'Mesa Caza del Huevo',
  image: 'FtrEggTableS.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ earth: 4 })
},
{
  name: 'Taburete Caza del Huevo',
  image: 'FtrEggStool.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ water: 3 })
},
{
  name: 'Guirnalda luz Caza Huevo',
  image: 'FtrEggLampWall.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.WALL_OBJECT, CATEGORY.LAMP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1, rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Lámpara Caza del Huevo',
  image: 'FtrEggLamp.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.LAMP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ wooden: 4 })
},
{
  name: 'Tocador Caza del Huevo',
  image: 'FtrEggDresser.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.CHEST],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ forest: 4 })
},
{
  name: 'Armario Caza del Huevo',
  image: 'FtrEggClosetLR.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.WARDROBE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ rock: 4 })
},
{
  name: 'Reloj pared Caza del Huevo',
  image: 'FtrEggClock.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.CLOCK, CATEGORY.WALL_OBJECT],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 3 })
},
{
  name: 'Cama Caza del Huevo',
  image: 'FtrEggBedW.png',
  height: 2,
  width: 2,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1, rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Globo Caza del Huevo set 2',
  image: 'FtrEggBalloonB.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Globo Caza del Huevo set 1',
  image: 'FtrEggBalloonA.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1 })
},
{
  name: 'Arco Caza del Huevo',
  image: 'FtrEggArch.png',
  height: 1,
  width: 3,
  category: [CATEGORY.FURNITURE, CATEGORY.ARK],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 2, earth: 2, forest: 2, rock: 2, water: 2, wooden: 2 })
},
{
  name: 'Corona Caza del Huevo',
  image: 'FtrDoorOrnamentWreathEaster.png',
  height: 1,
  width: 1,
  category: [CATEGORY.DOOR, CATEGORY.WALL_OBJECT],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1, rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Tentetieso Coti Conejal',
  image: 'FtrDollPyn.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 4, earth: 4, forest: 4, rock: 4, water: 4, wooden: 4 })
},
{
  name: 'Guirnalda Caza del Huevo',
  image: 'CapOrnamentCEgg0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1, rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Cáscara de huevo Celeste',
  image: 'CapHatEggsky0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 2 })
},
{
  name: 'Cáscara de huevo Rupestre',
  image: 'CapHatEggrock0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ rock: 2 })
},
{
  name: 'Sombrero de fiesta huevo',
  image: 'CapHatEggparty0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 2, earth: 2, forest: 2, rock: 2, water: 2, wooden: 2 })
},
{
  name: 'Cáscara de huevo Boscoso',
  image: 'CapHatEggleaf0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ forest: 2 })
},
{
  name: 'Cáscara de huevo Terrestre',
  image: 'CapHatEggground0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ earth: 2 })
},
{
  name: 'Cáscara de huevo Leñoso',
  image: 'CapHatEggforest0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ wooden: 2 })
},
{
  name: 'Mochila Caza del Huevo',
  image: 'BagBackpackEgg0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.BAG],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ sky: 1, earth: 1, forest: 1, rock: 1, water: 1, wooden: 1 })
},
{
  name: 'Cáscara de huevo Acuático',
  image: 'CapHatEggfish0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.CAP],
  serie: SERIES.EASTER,
  materials: getEasterMaterials({ water: 2 })
}]
