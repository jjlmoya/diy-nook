import MATERIALS from '../materials.data'
import SERIES from '../series.data'
import CATEGORY from '../category.data'

export default [{
  name: 'Falda de Paja',
  image: 'BottomsTexSkirtBoxGrass0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: '7'
  }]
}, {
  name: 'Falda de Hojas',
  image: 'BottomsTexSkirtBoxGrass1.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: '7'
  }]
}, {
  name: 'Cebo',
  image: 'FishBait.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CONSUMIBLE],
  serie: SERIES.TOOLS,
  materials: [{
    ...MATERIALS.JAPANESE_CLAM,
    quantity: 1
  }]
}, {
  name: 'Guitarra Acústica',
  image: 'FtrAcorsticguitar.png',
  height: 1,
  width: 1,
  category: [CATEGORY.MUSIC],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 8
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 3
  }]
}, {
  name: 'Quemador de esencias',
  image: 'FtrAlomapot.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 3
  }]
}, {
  name: 'Juguete Balancín',
  image: 'FtrBalancingtoy.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.BLOCK,
  materials: []
}, {
  name: 'Barra de Pesas',
  image: 'FtrBarbell.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 10
  }]
}, {
  name: 'Oso XL',
  image: 'FtrBearXL.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Papá oso'),
    quantity: 1
  }, {
    ...MATERIALS.FURNITURE('Mamá oso'),
    quantity: 1
  }, {
    ...MATERIALS.FURNITURE('Bebé oso'),
    quantity: 1
  }]
}, {
  name: 'Colmena de Apicultura',
  image: 'FtrBeekeepingbox.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WASP_NEST,
    quantity: 3
  }, {
    ...MATERIALS.WOOD,
    quantity: 5
  }]
}, {
  name: 'Bañadero para Pájaros',
  image: 'FtrBirdbus.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 6
  }]
}, {
  name: 'Jaula de Pájaro',
  image: 'FtrBirdcage.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: []
}, {
  name: 'Casita para Pájaros',
  image: 'FtrBirdhouse.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.BLOCK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 2
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 5
  }]
}, {
  name: 'Fuego de Campamento',
  image: 'FtrBonfire.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.BRANCH,
    quantity: 3
  }]
}, {
  name: 'Bonsai de Pino',
  image: 'FtrBonsaiPine.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.TREE],
  serie: SERIES.MAPLE,
  materials: [{
    ...MATERIALS.PINECONE,
    quantity: '8'
  }, {
    ...MATERIALS.CLAY,
    quantity: '5'
  }]
}, {
  name: 'Banco de Bonsái',
  image: 'FtrBonsaiShelf.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.TREE],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.FURNITURE('Bonsai Flor de Cerezo'),
    quantity: '1'
  }, {
    ...MATERIALS.FURNITURE('Bonsai de Piña'),
    quantity: '1'
  }, {
    ...MATERIALS.WOOD,
    quantity: '8'
  }]
}, {
  name: 'Pila de Libros',
  image: 'FtrBooks.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Libro'),
    quantity: 5
  }]
}, {
  name: 'Librería Grande',
  image: 'FtrBookshelf.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.SHELVE],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Libro'),
    quantity: 5
  }, {
    ...MATERIALS.WOOD,
    quantity: 10
  }]
}, {
  name: 'Búmeran',
  image: 'FtrBoomerang.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 3
  }]
}, {
  name: 'Cubo de Madera',
  image: 'FtrBucketWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.GARDEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 1
  }]
}, {
  name: 'Mantequera',
  image: 'FtrButtermixer.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.GARDEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 4
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Hoguera',
  image: 'FtrCampfire.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [
    {
      ...MATERIALS.FURNITURE('Fuego de Campamento'),
      quantity: 1
    }, {
      ...MATERIALS.WOOD,
      quantity: 10
    }
  ]
}, {
  name: 'Vela de Navidad',
  image: 'FtrCandleXmas.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT, CATEGORY.LAMP],
  serie: SERIES.LIGHT,
  materials: []
}, {
  name: 'Arcilla para Modelar',
  image: 'FtrClaytoy.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 2
  }]
}, {
  name: 'Tendedero Añejo',
  image: 'FtrClothesline.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.BRANCH,
    quantity: 10
  }]
}, {
  name: 'Zumo de Coco',
  image: 'FtrCoconutjuice.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.FRUIT,
  materials: [{
    ...MATERIALS.COCONUT,
    quantity: 1
  }]
}, {
  name: 'Torres de cojines japoneses',
  image: 'FtrCushionJapanPile.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Cojines con Borlas'),
    quantity: 3
  }]
}, {
  name: 'Tabla de cortar sencilla',
  image: 'FtrCuttingboard.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 2
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 1
  }]
}, {
  name: 'Pato de Madera',
  image: 'FtrDecoy.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 4
  }]
}, {
  name: 'Mesita de Té',
  image: 'FtrDiningtableJapan.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.TABLE],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 12
  }]
}, {
  name: 'Platos sin cocer',
  image: 'FtrDishesUnglazed.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 3
  }]
}, {
  name: 'Caseta de Perro',
  image: 'FtrDoghouse.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 10
  }, {
    ...MATERIALS.SOLID_WOOD,
    quantity: 7
  }]
}, {
  name: 'Fuente para Beber',
  image: 'FtrDrinkingfountain.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 8
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Bañera Barril',
  image: 'FtrDrumcanbath.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Barril de Petróleo'),
    quantity: 1
  }, {
    ...MATERIALS.FURNITURE('Fuego de Campamento'),
    quantity: 1
  }, {
    ...MATERIALS.STONE,
    quantity: 2
  }]
}, {
  name: 'Hojas Caídas',
  image: 'FtrFallenleaves.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.MAPLE,
  materials: [{
    ...MATERIALS.PINECONE,
    quantity: 3
  }, {
    ...MATERIALS.HERB,
    quantity: 5
  }]
}, {
  name: 'Silla de Hojas caídas',
  image: 'FtrFallenleavesChairS.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.MAPLE,
  materials: []
}, {
  name: 'Fuego Pila de hojas',
  image: 'FtrFallenleavesfire.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.MAPLE,
  materials: [{
    ...MATERIALS.PINECONE,
    quantity: 3
  }, {
    ...MATERIALS.HERB,
    quantity: 5
  }, {
    ...MATERIALS.BRANCH,
    quantity: 5
  }]
}, {
  name: 'Pila de hojas verdes',
  image: 'FtrFallenleavesGreen.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.BAMBOO,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 10
  }, {
    ...MATERIALS.BAMBU_SPRING,
    quantity: 1
  }]
}, {
  name: 'Hojas caídas rojas',
  image: 'FtrFallenleavesRed.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.MAPLE,
  materials: [{
    ...MATERIALS.MAPLE,
    quantity: 3
  }, {
    ...MATERIALS.HERB,
    quantity: 4
  }]
}, {
  name: 'Hojas caídas amarillas',
  image: 'FtrFallenleavesYellow.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.MAPLE,
  materials: [{
    ...MATERIALS.ACORN,
    quantity: 3
  }, {
    ...MATERIALS.HERB,
    quantity: 5
  }]
}, {
  name: 'FtrFestivaltop',
  image: 'FtrFestivaltop.png',
  height: 1,
  width: 1,
  category: [],
  serie: SERIES.NOOK,
  materials: []
}, {
  name: 'Madera para hoguera',
  image: 'FtrFirewood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 4
  }]
}, {
  name: 'Tenderete',
  image: 'FtrFloat.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 12
  }]
}, {
  name: 'Montón de Papeles',
  image: 'FtrFloorpapers.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Pila de papeles'),
    quantity: 1
  }]
}, {
  name: 'Fuente',
  image: 'FtrFountain.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.FURNITURE('Fuente para Beber'),
    quantity: 1
  }, {
    ...MATERIALS.STONE,
    quantity: 20
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 8
  }]
}, {
  name: 'Basura',
  image: 'FtrGarbagebag.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.TRASH_CAN,
    quantity: 1
  }, {
    ...MATERIALS.TRASH_BOOT,
    quantity: 1
  }, {
    ...MATERIALS.TRASH_WHEEL,
    quantity: 1
  }]
}, {
  name: 'Bañera Caldero',
  image: 'FtrGoemonburo.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 8
  }, {
    ...MATERIALS.WOOD,
    quantity: 1
  }, {
    ...MATERIALS.FURNITURE('Fuego de campamento'),
    quantity: 1
  }]
}, {
  name: 'Tumba Clásica',
  image: 'FtrGravestoneEuropean.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 30
  }]
}, {
  name: 'Tumba Japonesa',
  image: 'FtrGravestoneJapan.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 30
  }]
}, {
  name: 'Bomba manual',
  image: 'FtrHandpump.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.GARDEN,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }, {
    ...MATERIALS.CLAY,
    quantity: 6
  }]
}, {
  name: 'Hierba Atrezo',
  image: 'FtrHariboteGrass.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 2
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 2
  }]
}, {
  name: 'Seto Atrezo',
  image: 'FtrHariboteHedge.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.FURNITURE],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 2
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 3
  }]
}, {
  name: 'Montaña Atrezo',
  image: 'FtrHariboteMountain.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.FURNITURE],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 4
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 5
  }]
}, {
  name: 'Árbol Atrezo',
  image: 'FtrHariboteTree.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.FURNITURE],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 5
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 8
  }]
}, {
  name: 'Colchón de Heno',
  image: 'FtrHaybed.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 20
  }]
}, {
  name: 'Robot',
  image: 'FtrHerorobot.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Cohete Espacial'),
    quantity: 1
  }, {
    ...MATERIALS.FURNITURE('Armadura de Oro'),
    quantity: 1
  }, {
    ...MATERIALS.RUSTY_PIECE,
    quantity: 30
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 90
  }, {
    ...MATERIALS.GOLD_NUGGET,
    quantity: 10
  }]
}, {
  name: 'Cabeza de Ciervo Decorativa',
  image: 'FtrHuntingtrophy.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 8
  }]
}, {
  name: 'Kalimba Casero',
  image: 'FtrKalimbaCan.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.TRASH_CAN,
    quantity: 1
  }, {
    ...MATERIALS.WOOD,
    quantity: 1
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 1
  }]
}, {
  name: 'Vasija',
  image: 'FtrKame.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 5
  }]
}, {
  name: 'Carrito Carraca',
  image: 'FtrKatakatatoy.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.BLOCK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 2
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 6
  }]
}, {
  name: 'Pesa Rusa',
  image: 'FtrKettlebell.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 5
  }]
}, {
  name: 'Sujeta Llaves',
  image: 'FtrKeyhanger.png',
  height: 1,
  width: 1,
  category: [CATEGORY.WALL_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 1
  }]
}, {
  name: 'Maceta con Hiedra',
  image: 'FtrLeafWall.png',
  height: 1,
  width: 1,
  category: [CATEGORY.WALL_OBJECT],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 5
  }, {
    ...MATERIALS.CLAY,
    quantity: 5
  }]
}, {
  name: 'Montón de Revistas',
  image: 'FtrMagagine.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Revista'),
    quantity: 6
  }]
}, {
  name: 'Revistero',
  image: 'FtrMagazinerack.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Revista'),
    quantity: 2
  }, {
    ...MATERIALS.WOOD,
    quantity: 4
  }]
}, {
  name: 'Tapa de Cloaca',
  image: 'FtrManhole.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 3
  }]
}, {
  name: 'Matrioska',
  image: 'FtrMatryoshka.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 5
  }]
}, {
  name: 'Asteroide',
  image: 'FtrMeteo.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 5
  }, {
    ...MATERIALS.STONE,
    quantity: 10
  }]
}, {
  name: 'Microbiblioteca',
  image: 'FtrMicrolibrary.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.SHELVE],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 5
  }, {
    ...MATERIALS.FURNITURE('Libro'),
    quantity: 1
  }]
}, {
  name: 'Modulo Lunar',
  image: 'FtrModule.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 10
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 15
  }]
}, {
  name: 'Pez de Madera de Percusión',
  image: 'FtrMokugyo.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT, CATEGORY.MUSIC],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }]
}, {
  name: 'Luna',
  image: 'FtrMoon.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 15
  }, {
    ...MATERIALS.STAR_FRAGMENT_XL,
    quantity: 1
  }]
}, {
  name: 'Moonrover',
  image: 'FtrMoonrover.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 10
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 10
  }, {
    ...MATERIALS.TRASH_WHEEL,
    quantity: 4
  }]
}, {
  name: 'Lote grande de cajas',
  image: 'FtrMovingboxL.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.CARDBOARD,
  materials: [{
    ...MATERIALS.FURNITURE('Cajas'),
    quantity: 5
  }]
}, {
  name: 'Lote mediano de cajas',
  image: 'FtrMovingboxM.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.CARDBOARD,
  materials: [{
    ...MATERIALS.FURNITURE('Cajas'),
    quantity: 4
  }]
}, {
  name: 'Lote Pequeño de cajas',
  image: 'FtrMovingboxS.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.CARDBOARD,
  materials: [{
    ...MATERIALS.FURNITURE('Cajas'),
    quantity: 2
  }]
}, {
  name: 'Porta Partituras',
  image: 'FtrMusicstand.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR, CATEGORY.MUSIC],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 8
  }]
}, {
  name: 'Pila de Documentos',
  image: 'FtrOfficePapers.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Papeles tirados'),
    quantity: 1
  }]
}, {
  name: 'Baño Termal',
  image: 'FtrOpenairbath.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 3
  }, {
    ...MATERIALS.SHOVEL,
    quantity: 1
  }]
}, {
  name: 'Juguete Cuna',
  image: 'FtrOrnamentMobile.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.NOOK,
  materials: []
}, {
  name: 'Figura Oriental de Mapache',
  image: 'FtrOrnamentTanuki.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 6
  }]
}, {
  name: 'Lámpara Palmera',
  image: 'FtrPalmtreelamp.png',
  height: 1,
  width: 1,
  category: [CATEGORY.LAMP, CATEGORY.FURNITURE],
  serie: SERIES.FRUIT,
  materials: [{
    ...MATERIALS.COCONUT,
    quantity: 4
  }, {
    ...MATERIALS.WOOD,
    quantity: 4
  }, {
    ...MATERIALS.CLAY,
    quantity: 4
  }]
}, {
  name: 'Sartén',
  image: 'FtrPan.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Banco de Jardín',
  image: 'FtrParkbenche.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.CHAIR, CATEGORY.EXTERIOR],
  serie: SERIES.GARDEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 12
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 4
  }]
}, {
  name: 'Piano Ambulante',
  image: 'FtrPianoStreet.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.FURNITURE, CATEGORY.MUSIC],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FURNITURE('Piano de Pared'),
    quantity: 1
  }, {
    ...MATERIALS.FURNITURE('Kit de Pintura'),
    quantity: 1
  }]
}, {
  name: 'Tonel',
  image: 'FtrPirateBarrel.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.GARDEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 5
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Macetero de Coco Colgante ',
  image: 'FtrPlanterPalm.png',
  height: 1,
  width: 1,
  category: [CATEGORY.WALL_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.COCONUT,
    quantity: 1
  }, {
    ...MATERIALS.HERB,
    quantity: 5
  }]
}, {
  name: 'Aloe Pequeño',
  image: 'FtrPlantSucculents.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 10
  }, {
    ...MATERIALS.TRASH_CAN,
    quantity: 1
  }]
}, {
  name: 'Rueda de Juguete',
  image: 'FtrPlayingtire.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.TRASH_WHEEL,
    quantity: 1
  }]
}, {
  name: 'Jarra de Cerámica',
  image: 'FtrPotteryjug.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 4
  }]
}, {
  name: 'Juego de Lanzar Aros',
  image: 'FtrQuoits.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TABLE_OBJECT],
  serie: SERIES.BLOCK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 2
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 2
  }]
}, {
  name: 'Megalito',
  image: 'FtrRockArch.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 90
  }]
}, {
  name: 'Cohete',
  image: 'FtrRocket.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 10
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 20
  }]
}, {
  name: 'Mecedora',
  image: 'FtrRockingchair.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.CHAIR],
  serie: SERIES.BLOCK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 5
  }]
}, {
  name: 'Caballo Balancín',
  image: 'FtrRockinghorse.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.BLOCK,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 5
  }]
}, {
  name: 'Placa de Piedra',
  image: 'FtrRockMonument.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 12
  }]
}, {
  name: 'Satélite',
  image: 'FtrSatellite.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 10
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 15
  }]
}, {
  name: 'Espantapájaros',
  image: 'FtrScarecrow.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.BRANCH,
    quantity: 3
  }, {
    ...MATERIALS.HERB,
    quantity: 3
  }]
}, {
  name: 'Pantalla de Celda',
  image: 'FtrScreenCage.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.SPLITER],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 5
  }]
}, {
  name: 'Estatua de León Guardián',
  image: 'FtrSekishishi.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 24
  }]
}, {
  name: 'Fuente de Bambú',
  image: 'FtrShishiodoshi.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.BAMBOO,
  materials: [{
    ...MATERIALS.BAMBU,
    quantity: 3
  }, {
    ...MATERIALS.STONE,
    quantity: 8
  }, {
    ...MATERIALS.HERB,
    quantity: 3
  }]
}, {
  name: 'Transbordador',
  image: 'FtrShuttle.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 5
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 10
  }]
}, {
  name: 'Rótulo en bajorrelieve',
  image: 'FtrSignboardWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 5
  }]
}, {
  name: 'Señal',
  image: 'FtrSignpost.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 2
  }, {
    ...MATERIALS.WOOD,
    quantity: 3
  }]
}, {
  name: 'Poste Indicador Oblicuo',
  image: 'FtrSignpostTilt.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 2
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 3
  }]
}, {
  name: 'Poste Cruce de Caminos',
  image: 'FtrSignpostWorld.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 4
  }]
}, {
  name: 'Cartel Sencillo de Madera',
  image: 'FtrSignWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 6
  }]
}, {
  name: 'Silo',
  image: 'FtrSilo.png',
  height: 2,
  width: 2,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 22
  }, {
    ...MATERIALS.SOLID_WOOD,
    quantity: 3
  }, {
    ...MATERIALS.CLAY,
    quantity: 3
  }, {
    ...MATERIALS.STONE,
    quantity: 3
  }]
}, {
  name: 'Trineo',
  image: 'FtrSled.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.BLOCK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 8
  }]
}, {
  name: 'Muñeco de Nieve',
  image: 'FtrSnowman.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.ICE,
  materials: [{
    ...MATERIALS.ICE,
    quantity: 6
  }, {
    ...MATERIALS.ICE_XL,
    quantity: 1
  }, {
    ...MATERIALS.BRANCH,
    quantity: 2
  }]
}, {
  name: 'Estufa de Sauna',
  image: 'FtrStoveSauna.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 6
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 3
  }, {
    ...MATERIALS.WOOD,
    quantity: 3
  }]
}, {
  name: 'Balancín de Jardín',
  image: 'FtrSwingWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.BLOCK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 5
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 7
  }]
}, {
  name: 'Gong',
  image: 'FtrTamtam.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 6
  }, {
    ...MATERIALS.WOOD,
    quantity: 5
  }]
}, {
  name: 'Terrario Botánico',
  image: 'FtrTerrarium.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.TABLE_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 12
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Terrario colgante',
  image: 'FtrTerrariumWall.png',
  height: 1,
  width: 1,
  category: [CATEGORY.WALL_OBJECT],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 12
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 4
  }]
}, {
  name: 'Rompeolas',
  image: 'FtrTetrapod.png',
  height: 2,
  width: 2,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 10
  }, {
    ...MATERIALS.CLAY,
    quantity: 10
  }]
}, {
  name: 'Caja de herramientas',
  image: 'FtrToolboxWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 4
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Antorcha',
  image: 'FtrTorch.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.BRANCH,
    quantity: 5
  }, {
    ...MATERIALS.WOOD,
    quantity: 5
  }]
}, {
  name: 'Basura de Madera',
  image: 'FtrTrashboxWood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.WOODEN,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 4
  }]
}, {
  name: 'Arbol de Navidad Grande',
  image: 'FtrTreeXmasL.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.TREE],
  serie: SERIES.LIGHT,
  materials: []
}, {
  name: 'Miniárbol de Navidad',
  image: 'FtrTreeXmasMini.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.TREE],
  serie: SERIES.LIGHT,
  materials: []
}, {
  name: 'Árbol de Navidad Pequeño',
  image: 'FtrTreeXmasS.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.TREE],
  serie: SERIES.LIGHT,
  materials: []
}, {
  name: 'Vitrina de Trofeos',
  image: 'FtrTrophycase.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.FURNITURE],
  serie: SERIES.NOOK,
  materials: [
    {
      ...MATERIALS.SOLID_WOOD,
      quantity: 24
    },
    {
      ...MATERIALS.GOLD_NUGGET,
      quantity: 3
    }, {
      ...MATERIALS.IRON_NUGGET,
      quantity: 6
    }
  ]
}, {
  name: 'Pila de Neumáticos',
  image: 'FtrTyres.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.TRASH_WHEEL,
    quantity: 3
  }]
}, {
  name: 'OVNI',
  image: 'FtrUFO.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.SPACE,
  materials: [{
    ...MATERIALS.STAR_FRAGMENT,
    quantity: 15
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 10
  }]
}, {
  name: 'Ukelele',
  image: 'FtrUkulele.png',
  height: 1,
  width: 1,
  category: [CATEGORY.MUSIC],
  serie: SERIES.TOOLS,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 5
  }]
}, {
  name: 'Lavabo Sencillo',
  image: 'FtrWashstandBowl.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TOILET],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 6
  }, {
    ...MATERIALS.CLAY,
    quantity: 4
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 1
  }]
}, {
  name: 'Palangana Tradicional',
  image: 'FtrWashtub.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 3
  }]
}, {
  name: 'Pozo de piedra',
  image: 'FtrWell.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.STONE,
  materials: [{
    ...MATERIALS.STONE,
    quantity: 15
  }, {
    ...MATERIALS.WEAK_SHOVEL,
    quantity: 1
  }]
}, {
  name: 'Pozo de Obra',
  image: 'FtrWellBrick.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.CLAY,
    quantity: 8
  }, {
    ...MATERIALS.WOOD,
    quantity: 5
  }, {
    ...MATERIALS.WEAK_SHOVEL,
    quantity: 1
  }]
}, {
  name: 'Banco de Madera',
  image: 'FtrWoodBench.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR, CATEGORY.CHAIR],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 8
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 3
  }]
}, {
  name: 'Lote de Estacas',
  image: 'FtrWoodPile.png',
  height: 1,
  width: 1,
  category: [CATEGORY.EXTERIOR],
  serie: SERIES.LOG,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }]
}, {
  name: 'Banco de trabajo',
  image: 'FtrWorkbench.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.EXTERIOR],
  serie: SERIES.NOOK,
  materials: []
}, {
  name: 'Mesa de Trabajo Universidad',
  image: 'FtrWorkbenchIronwood.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.DESKTOP],
  serie: SERIES.UNIVERSIDAD,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 6
  }, {
    ...MATERIALS.WOOD,
    quantity: 12
  }, {
    ...MATERIALS.FURNITURE('Banco de Trabajo'),
    quantity: 1
  }]
}, {
  name: 'Banquito de Bricolaje',
  image: 'FtrWorkbenchS.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.DESKTOP],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.WOOD,
    quantity: 3
  }, {
    ...MATERIALS.SOLID_WOOD,
    quantity: 3
  }, {
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 3
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 2
  }]
}, {
  name: 'Banco de Bricolaje Sencillo',
  image: 'FtrWorkbenchStump.png',
  height: 1,
  width: 1,
  category: [CATEGORY.FURNITURE, CATEGORY.DESKTOP],
  serie: SERIES.LOG,
  materials: [{
    ...MATERIALS.SOLID_WOOD,
    quantity: 5
  }, {
    ...MATERIALS.IRON_NUGGET,
    quantity: 1
  }]
}, {
  name: 'Medicina',
  image: 'ItemMedicine.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CONSUMIBLE],
  serie: SERIES.TOOLS,
  materials: [
    {
      ...MATERIALS.WASP_NEST,
      quantity: 1
    }, {
      ...MATERIALS.HERB,
      quantity: 3
    }
  ]
}, {
  name: 'Pértiga',
  image: 'LongWoodenStick.png',
  height: 1,
  width: 1,
  category: [CATEGORY.TOOL],
  serie: SERIES.TOOLS,
  materials: [{
    ...MATERIALS.FLEXIBLE_WOOD,
    quantity: 5
  }]
}, {
  name: 'Trampa',
  image: 'PitfallSeed.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CONSUMIBLE],
  serie: SERIES.TOOLS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 4
  }, {
    ...MATERIALS.BRANCH,
    quantity: 6
  }]
}, {
  name: 'Botas de Hierro',
  image: 'ShoesKneeKnightIron.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 3
  }]
}, {
  name: 'Bota Reciclada',
  image: 'ShoesKneeRecyclingboots0.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.SHOES],
  serie: SERIES.NOOK,
  materials: [{
    ...MATERIALS.TRASH_BOOT,
    quantity: 2
  }]
}, {
  name: 'Armadura de Hierro',
  image: 'TopsTexOnepieceOverallLPlatearmorIron.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.IRON,
  materials: [{
    ...MATERIALS.IRON_NUGGET,
    quantity: 8
  }]
}, {
  name: 'Abrigo de Paja',
  image: 'TopsTexTopCoatLStrawBeige.png',
  height: 1,
  width: 1,
  category: [CATEGORY.CLOTH, CATEGORY.ONE_PIECE],
  serie: SERIES.GRASS,
  materials: [{
    ...MATERIALS.HERB,
    quantity: 8
  }]
}]
