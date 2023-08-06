import PlantsBuilder from '../plantsBuilder.js';
import plantsConfig from './config.js'; 
import { toCamelCase } from './toCamelCase.js';



export function getPlantName(place, toxicPlant) {
    const plantType = plantsConfig[toCamelCase(place)][toCamelCase(toxicPlant)];
    return plantType ? plantType[0] : '';
}

export function buildRecommendation(place, soilType, toxicPlant, water, stylePot, extras) {
    const recommendation = new PlantsBuilder()
        .withPlantName(getPlantName(place, toxicPlant))
        .withSoilType(soilType)
        .withCeramicMaterial() // O conClayMaterial() según tu lógica
        .withPets(toxicPlant === 'nonToxic') // Si es no tóxica, conPets; si es tóxica, conNotPets
        .withWateringMethod(water) // Agrega el método para water
        .withPotStyle(stylePot)
        .withExtras(extras);

    return recommendation;
}