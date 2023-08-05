import PlantsBuilder from '../plantsBuilder.js'; // Asegúrate de tener la ruta correcta a plantsBuilder.js
import plantsConfig from './config.js'; // Asegúrate de tener la ruta correcta a config.js


function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

const initializeFormLogic = () => {
  const form = document.getElementById('plants-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const place = document.querySelector('input[name="place"]:checked').value;
    const soilType = document.querySelector('input[name="soilType"]:checked').value;
    const toxicPlant = document.querySelector('input[name="toxicPlant"]:checked').value;
    const water = document.querySelector('input[name="water"]:checked').value;
    const stylePot = document.querySelector('input[name="stylePot"]:checked').value;
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);

    const getPlantName = () => {
      const plantType = plantsConfig[toCamelCase(place)][toCamelCase(toxicPlant)];
      return plantType ? plantType[0] : '';
    };

    const recommendation = new PlantsBuilder()
      .withPlantName(getPlantName())
      .withSoilType(soilType)
      .withCeramicMaterial() 
      .withPets(toxicPlant === 'nonToxic')
      .withWateringMethod(water) 
      .withPotStyle(stylePot)
      .withExtras(extras);

    const recommendationDiv = document.querySelector('.plant-info');
    recommendationDiv.innerHTML = `
      <h2>Recommended Plant</h2>
      <p>Name: ${recommendation.name}</p>
      <p>Soil: ${recommendation.soil}</p>
      <p>Pot: ${recommendation.pot}</p>
      <p>Color: ${recommendation.color}</p>
      <p>Extras: ${recommendation.extras.join(', ')}</p>
    `;
  });

  const clearButton = document.querySelector('.clear-btn');

  clearButton.addEventListener('click', () => {
    form.reset();
    const recommendationDiv = document.querySelector('.plant-info');
    recommendationDiv.innerHTML = '';
  });
};

export default initializeFormLogic;