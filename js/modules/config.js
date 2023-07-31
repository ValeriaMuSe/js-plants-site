const plantConfig = [
  {
    light: 'low_light',
    plants: [
      {
        toxic: true,
        default: 'sansevieria',
        overwater: 'peace-lily',
      },
      {
        toxic: false,
        default: 'boston-fern',
        overwater: 'boston-fern',
      },
    ],
  },
  {
    light: 'medium_light',
    plants: [
      {
        toxic: true,
        default: 'aglaonema',
        overwater: 'peace-lily',
      },
      {
        toxic: false,
        default: 'monstera',
        overwater: 'peace-lily',
      },
    ],
  },
  {
    light: 'outdoor',
    plants: [
      {
        toxic: true,
        default: 'aloe-vera',
        overwater: 'aloe-vera',
      },
      {
        toxic: false,
        default: 'cactus',
        overwater: 'cactus',
      },
    ],
  },
];

export default plantConfig;