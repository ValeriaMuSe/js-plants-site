import PlantsBuilder from '../plantsBuilder.js';
import plantsConfig from './config.js';

function getPlant(place, toxicPlant) {
  const plantType = plantsConfig[place]?.[toxicPlant]?.[0];
  const plant = plantType ? { name: plantType.name, image: plantType.image } : null;
  return plant;
}

function buildRecommendation(place, soilType, toxicPlant, water, stylePot, extras) {
  const plant = getPlant(place, toxicPlant);

  const recommendation = new PlantsBuilder()
    .withPlant(plant)
    .withImage(plant.image)
    .withSoilType(soilType)
    .withCeramicMaterial() // Default to ceramic
    .withPets(toxicPlant === 'nonToxic')
    .withWateringMethod(water)
    .withPotStyle(stylePot)
    .withExtras(extras);

  // Update the material of the pot based on watering preference
  if (water === 'Overwater') {
    recommendation.withClayMaterial(); // Use clay pot for overwatering
  }

  return recommendation;

  
}

export default buildRecommendation;




