import PlantsBuilder from '../plantsBuilder.js';
import plantsConfig from './config.js';

function getPlant(place, toxicPlant) {
  const plantType = plantsConfig[place]?.[toxicPlant]?.[0];
  const plant = plantType ? { name: plantType } : null;
  return plant;
}

function buildRecommendation(place, soilType, toxicPlant, water, stylePot, extras) {
  const plant = getPlant(place, toxicPlant);

  const recommendation = new PlantsBuilder()
    .withPlant(plant) 
    .withSoilType(soilType)
    .withCeramicMaterial() 
    .withPets(toxicPlant === 'nonToxic') 
    .withWateringMethod(water) 
    .withPotStyle(stylePot)
    .withExtras(extras);
  
  return recommendation;
}

export { getPlant, buildRecommendation }