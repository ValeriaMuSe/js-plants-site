
// import Plants from './modules/plants.js'; 
import { getPlants } from './modules/getPlants.js'; 


// Agregamos un evento click al botón "Get your plant"
document.querySelector('.get-btn').addEventListener('click', () => {
  // Aquí obtendríamos las respuestas del formulario, por ejemplo, en un objeto formData.
  // Por simplicidad, utilizamos un objeto de ejemplo:
  const formData = {
    "WhereToPlace": "Inside with some indirect light",
    "Sunlight": "No",
    "Pets": "No",
    "WateringHabits": "Neither",
    "Style": "I like minimalism and material colors",
    "Extras": ["Moss pole", "Pebbles"],
  };

  // Obtenemos la planta según las respuestas del formulario
  const plants = getPlants(formData);

  // Mostramos la información de la planta en el DOM
  const plantInfoContainer = document.querySelector('.plant-info');
  plantInfoContainer.innerHTML = '';

  plants.forEach((plant) => {
    const plantInfo = document.createElement('div');
    plantInfo.innerHTML = `
      <h2>${plant.name}</h2>
      <p>Soil Type: ${plant.soilType}</p>
      <p>Pot Material: ${plant.potMaterial}</p>
      <p>Pot Style: ${plant.potStyle}</p>
      <p>Pot Color: ${plant.potColor}</p>
      <p>Extras: ${plant.extras.join(', ')}</p>
    `;
    plantInfoContainer.appendChild(plantInfo);
  });

  // Mostramos el contenedor con la información de la planta
  plantInfoContainer.style.display = 'block';
});

// Agregamos un evento click al botón "Clear" para ocultar la información de la planta
document.querySelector('.clear-btn').addEventListener('click', () => {
  const plantInfoContainer = document.querySelector('.plant-info');
  plantInfoContainer.innerHTML = '';
  plantInfoContainer.style.display = 'none';
});
