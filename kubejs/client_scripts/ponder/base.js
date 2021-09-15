// priority: 10

const categories = [
  {
    id: 'enigmatica:industrial_foregoing',
    category_item_id:'industrialforegoing:latex_processing_unit',
    title:'Industrial Foregoing',
    description:'Learn more about the Industrial Foregoing mod and its intriguing mechanics!',
    items: [
      'industrialforegoing:ore_laser_base',
      'industrialforegoing:latex_processing_unit'
    ]
  },
  {
    id: 'enigmatica:basics',
    category_item_id:'minecraft:cobblestone',
    title:'Basic Mechanics',
    description:'Learn about some basic (sometimes vanilla!) mechanics that will come in handy.',
    items: [
      'minecraft:cobblestone',
      'minecraft:stone',
      'minecraft:end_crystal',
      'tetra:hammer_base'
    ]
  },
  {
    id: 'enigmatica:portals',
    category_item_id:'undergarden:catalyst',
    title:'Traveling with Portals',
    description:'Learn how to construct some of the key portals in Enigmatica.',
    items: [
      'undergarden:catalyst',
      'atum:scarab'
    ]
  }
]

onEvent('ponder.tag.registry', (event) => {
  categories.forEach((category) => {
    event.create(category.id, category.category_item_id, category.title, category.description)
  })
});

onEvent('ponder.tag', (event) => {
  categories.forEach((category) => {
    category.items.forEach((item) => {
      event.add(category.id, item);
    });
  });
});