const plantsConfig = {
  lowLight: {
    toxic: [
      {
        name: 'Sansevieria',
        image: './images/plant-sansevieria.png'
      },
      {
        name: 'Peace-Lily',
        image: './images/plant-peace-lily.png'
      }
    ],
    nonToxic: [
      {
        name: 'Boston-Fern',
        image: './images/plant-fern.png'
      }
    ]
  },
  mediumLight: {
    toxic: [
      {
        name: 'Aglaonema',
        image: './images/plant-aglaonema.png'
      },
      {
        name: 'Peace Lily',
        image: './images/plant-peace-lily.png'
      }
    ],
    nonToxic: [
      {
        name: 'Monstera',
        image: './images/plant-monstera.png'
      },
      {
        name: 'Peace Lily',
        image: './images/plant-peace-lily.png'
      }
    ]
  },
  outdoor: {
    toxic: [
      {
        name: 'Aloe Vera',
        image: './images/aloe-vera.png'
      }
    ],
    nonToxic: [
      {
        name: 'Cactus',
        image: './images/plant-cactus.png'
      }
    ]
  }
};


export function getColorByPotStyle(style) {
  switch (style) {
    case 'simple':
      return 'clay'; 
    case 'simple-decorated':
      return 'blue'; 
    case 'painted-decorated':
      return 'yellow'; 
    default:
      return 'pink'; 
  }
}

export function getPotImageByStyle(style, watering) {
  if (watering === 'Overwater') {
    if (style === 'I like minimalism and material colors') {
      return './images/simple-clay-pot.png';
    } else if (style === 'I like some decoration and simple colors') {
      return './images/simple-clay-pot-decorated.png';
    } else if (style === 'I like a lot of decoration and bright colors') {
      return './images/painted-clay-pot-decorated.png';
    }
  } else if (watering === 'Underwater' || watering === 'Neither') {
    if (style === 'I like minimalism and material colors') {
      return './images/simple-ceramic-pot.png';
    } else if (style === 'I like some decoration and simple colors') {
      return './images/simple-ceramic-pot-decorated.png';
    } else if (style === 'I like a lot of decoration and bright colors') {
      return './images/painted-ceramic-pot-decorated.png';
    }
  }
  return './images/simple-clay-pot.png';
}

export default plantsConfig ;

