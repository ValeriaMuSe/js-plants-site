
// getPlants.js
// import plantData from './config.js';
// import Plants from './plants.js'; 

// export function getPlants(formData) {
//   let plantType;
//   if (formData.WhereToPlace === "Inside with some indirect light") {
//     plantType = "Low Light Plants";
//   } else if (formData.WhereToPlace === "Inside with a lot of indirect light") {
//     plantType = "Medium Light Plants";
//   } else {
//     plantType = "Outdoor Plants";
//   }

//   const filteredPlants = plantData[plantType].filter((plant) => plant.soilType === formData.Sunlight);
//   const plants = [];

//   if (formData.Sunlight === "No") {
//     // Fertilized soil for Non-Toxic plants
//     filteredPlants.forEach((plant) => {
//       const newPlant = new Plants()
//         .setName(plant.name)
//         .setSoilType(plant.soilType)
//         .setPotMaterial("Ceramic")
//         .setPotStyle(plant.potStyle)
//         .setPotColor(plant.potColor)
//         .setImage(''); // Reemplaza 'url_de_la_imagen_aqui' por la URL correcta de la imagen de la planta
//       formData.Extras.forEach((extra) => newPlant.addExtra(extra));
//       plants.push(newPlant);
//     });
//   } else {
//     // Composted soil for Toxic plants
//     filteredPlants.forEach((plant) => {
//       const newPlant = new Plants()
//         .setName(plant.name)
//         .setSoilType(plant.soilType)
//         .setPotMaterial("Clay")
//         .setPotStyle(plant.potStyle)
//         .setPotColor(plant.potColor)
//         .setImage('url_de_la_imagen_aqui'); // Reemplaza 'url_de_la_imagen_aqui' por la URL correcta de la imagen de la planta
//       formData.Extras.forEach((extra) => newPlant.addExtra(extra));
//       plants.push(newPlant);
//     });
//   }

//   return plants;
// }

// export default getPlants ;


// getPlants.js
import plantData from './config.js';
import Plants from './plants.js'; // Importamos Plants desde el archivo plants.js

export function getPlants(formData) {
  // Obtener las opciones seleccionadas por el usuario
  const { WhereToPlace, Sunlight, Pets, WateringHabits, Style, Extras } = formData;

  // Filtrar las plantas según la ubicación
  let plantList = [];
  if (WhereToPlace === 'Inside with some indirect light') {
    plantList = plantList.concat(plantData['Low Light Plants']);
  } else if (WhereToPlace === 'Inside with a lot of indirect light') {
    plantList = plantList.concat(plantData['Medium Light Plants']);
  } else {
    plantList = plantList.concat(plantData['Outdoor Plants']);
  }

  // Filtrar las plantas según la cantidad de luz solar
  if (Sunlight === 'Yes') {
    plantList = plantList.filter((plant) => plant.soilType === 'Toxic');
  } else {
    plantList = plantList.filter((plant) => plant.soilType === 'Non-Toxic');
  }

  // Filtrar las plantas según la presencia de mascotas
  if (Pets === 'Yes') {
    plantList = plantList.filter((plant) => plant.potMaterial === 'Clay');
  }

  // Filtrar las plantas según los hábitos de riego
  if (WateringHabits === 'Yes') {
    plantList = plantList.filter((plant) => plant.potStyle === 'Simple');
  }

  // Filtrar las plantas según el estilo
  plantList = plantList.filter((plant) => plant.potColor === Style);

  // Filtrar las plantas según los extras seleccionados
  Extras.forEach((extra) => {
    plantList = plantList.filter((plant) => plant.extras.includes(extra));
  });

  // Retornar la lista de plantas recomendadas
  return plantList.map((plantData) => new Plants().setName(plantData.name)
    .setSoilType(plantData.soilType)
    .setPotMaterial(plantData.potMaterial)
    .setPotStyle(plantData.potStyle)
    .setPotColor(plantData.potColor)
    .addExtra(...plantData.extras));
}



