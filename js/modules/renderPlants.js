
import { getPlants } from './modules/getPlants.js';


document.querySelector('.submit-btn').addEventListener('click', () => {
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
    const plantInfo = createPlantInfoCard(plant);
    plantInfoContainer.appendChild(plantInfo);
  });

  // Mostramos el contenedor con la información de la planta
  plantInfoContainer.style.display = 'block';
});

document.querySelector('.clear-btn').addEventListener('click', () => {
  const plantInfoContainer = document.querySelector('.plant-info');
  plantInfoContainer.innerHTML = '';
  plantInfoContainer.style.display = 'none';
});

function createPlantInfoCard(plant) {
  const card = document.createElement('div');
  card.classList.add('plant-card');

  const title = document.createElement('h2');
  title.textContent = plant.name;
  card.appendChild(title);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const plantImage = document.createElement('img');
  plantImage.src = plant.image; // Replace 'image' with the correct property name in your 'getPlants' function that contains the plant image URL.
  plantImage.alt = plant.name;
  imageContainer.appendChild(plantImage);

  const recommendations = document.createElement('div');
  recommendations.innerHTML = `
    <p>Plant: ${plant.name}</p>
    <p>Pot: ${plant.potMaterial}, ${plant.potStyle}, ${plant.potColor}</p>
    <p>Soil: ${plant.soilType}</p>
    <p>Extras: ${plant.extras.join(', ')}</p>
  `;
  card.appendChild(imageContainer);
  card.appendChild(recommendations);

  return card;
}

export default createPlantInfoCard;