import PlantsBuilder from '../plantsBuilder.js';
import plantsConfig from './config.js';
import toCamelCase from './toCamelCase.js';

function getPlant(place, toxicPlant) {
  const plantType = plantsConfig[toCamelCase(place)][toCamelCase(toxicPlant)];
  return plantType ? plantType[0] : '';
}

function buildRecommendation(place, soilType, toxicPlant, water, stylePot, extras) {
  const plant = getPlant(place, toxicPlant);

  console.log('Place:', place);
  console.log('Toxic Plant:', toxicPlant);
  console.log('Plant:', plant);

  const recommendation = new PlantsBuilder()
    .withPlant(plant) 
    .withSoilType(soilType)
    .withCeramicMaterial() // O conClayMaterial() según tu lógica
    .withPets(toxicPlant === 'nonToxic') // Si es no tóxica, conPets; si es tóxica, conNotPets
    .withWateringMethod(water) // Agrega el método para water
    .withPotStyle(stylePot)
    .withExtras(extras);

  recommendation.name = plant.name; // Set the name property

  console.log('Recommendation:', recommendation);
  
  return recommendation;
}

export { getPlant, buildRecommendation }