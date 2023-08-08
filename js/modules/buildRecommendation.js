import PlantsBuilder from '../plantsBuilder.js';
import plantsConfig from './config.js';

function getPlant(place, toxicPlant) {
  const plantType = plantsConfig[place]?.[toxicPlant]?.[0];
  const plant = plantType ? { name: plantType.name } : null;
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
  
    const plantName = recommendation.getPlantName();
    console.log(plantName); // This will print the name of the recommended plant

  return recommendation;
}

export default buildRecommendation