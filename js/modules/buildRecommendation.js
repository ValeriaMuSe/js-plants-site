import PlantsBuilder from '../plantsBuilder.js';
import plantsConfig from './config.js';

function getPlant(place, toxicPlant) {
  if (!plantsConfig[place]) {
    return null;
  }

  const plantCategory = toxicPlant.toLowerCase() === 'yes' ? 'nonToxic' : 'toxic';
  const plantArray = plantsConfig[place][plantCategory];
  const plantType = plantArray ? plantArray[0] : null;
  const plant = plantType ? { name: plantType.name, image: plantType.image } : null;

  return plant;
}

function getExtrasImages(extras) {
  const extrasImages = [];
  const imagesMap = {
    "moss-pole": './images/moss-pole.png',
    "pebbles": './images/pebbles.png',
    "mini-plants": './images/mini-plants.png',
  };

  const extraClassMap = {
    "moss-pole": 'extra-moss-pole',
    "pebbles": 'extra-pebbles',
    "mini-plants": 'extra-mini-plants',
  };

  if (extras.length === 0) {
    return [];
  }

  extras.forEach(extra => {
    extrasImages.push({
      src: imagesMap[extra],
      className: extraClassMap[extra]
    });
  });

  return extrasImages;
}


function buildRecommendation(place, soilType, toxicPlant, water, style, extras) {
  const plant = getPlant(place, toxicPlant);
  
  if (!plant) {
    return null;
  }

  const extraImages = getExtrasImages(extras);

  const recommendation = new PlantsBuilder()
    .withPlant(plant)
    .withImage(plant.image)
    .withSoilType(soilType)
    .withCeramicMaterial()
    .withWateringMethod(water)
    .withPotStyle(style)
    .withExtras(extras)
    .withExtrasImages(extraImages);

  if (water === 'Overwater') {
    recommendation.withClayMaterial(); 
  } else if (water === 'Underwater' || water === 'Neither') {
    recommendation.withCeramicMaterial();
  }

  localStorage.setItem('plantRecommendation', JSON.stringify(recommendation));

  return recommendation;
}

export default buildRecommendation;