
// getPlants.js
import plantData from './config.js';
import Plants from './plants.js'; // Importación predeterminada

export function getPlants(formData) {
  let plantType;
  if (formData.WhereToPlace === "Inside with some indirect light") {
    plantType = "Low Light Plants";
  } else if (formData.WhereToPlace === "Inside with a lot of indirect light") {
    plantType = "Medium Light Plants";
  } else {
    plantType = "Outdoor Plants";
  }

  const filteredPlants = plantData[plantType].filter((plant) => plant.soilType === formData.Sunlight);
  const plants = [];

  if (formData.Sunlight === "No") {
    // Fertilized soil for Non-Toxic plants
    filteredPlants.forEach((plant) => {
      const newPlant = new Plants()
        .setName(plant.name)
        .setSoilType(plant.soilType)
        .setPotMaterial("Ceramic")
        .setPotStyle(plant.potStyle)
        .setPotColor(plant.potColor);
      formData.Extras.forEach((extra) => newPlant.addExtra(extra));
      plants.push(newPlant);
    });
  } else {
    // Composted soil for Toxic plants
    filteredPlants.forEach((plant) => {
      const newPlant = new Plants()
        .setName(plant.name)
        .setSoilType(plant.soilType)
        .setPotMaterial("Clay")
        .setPotStyle(plant.potStyle)
        .setPotColor(plant.potColor);
      formData.Extras.forEach((extra) => newPlant.addExtra(extra));
      plants.push(newPlant);
    });
  }

  return plants;
}

export default getPlants ;
