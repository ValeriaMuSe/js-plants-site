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

export default plantsConfig;