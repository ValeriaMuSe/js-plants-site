import PlantsBuilder from '../plantsBuilder.js'; // Asegúrate de tener la ruta correcta a plantsBuilder.js
import plantsConfig from './config.js'; // Asegúrate de tener la ruta correcta a config.js


function toCamelCase(str) {
    return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
  }

export function initializeFormLogic() {
    const form = document.getElementById('plants-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener respuestas del formulario
        const place = document.querySelector('input[name="place"]:checked').value;
        const soilType = document.querySelector('input[name="soilType"]:checked').value;
        const toxicPlant = document.querySelector('input[name="toxicPlant"]:checked').value;
        const water = document.querySelector('input[name="water"]:checked').value;
        const stylePot = document.querySelector('input[name="stylePot"]:checked').value;
        const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);

        // Construir recomendación con PlantsBuilder

        const recommendation = new PlantsBuilder()
            .withPlantName(getPlantName())
            .withSoilType(soilType)
            .withCeramicMaterial() // O conClayMaterial() según tu lógica
            .withPets(toxicPlant === 'nonToxic') // Si es no tóxica, conPets; si es tóxica, conNotPets
            .withWateringMethod(water) // Agrega el método para water
            .withPotStyle(stylePot)
            .withExtras(extras);

        function getPlantName() {
            const plantType = plantsConfig[toCamelCase(place)][toCamelCase(toxicPlant)];
            return plantType ? plantType[0] : '';
        }


        // Renderizar la recomendación
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

    clearButton.addEventListener('click', function () {
        form.reset();
        const recommendationDiv = document.querySelector('.plant-info');
        recommendationDiv.innerHTML = ''; // Limpiar la recomendación
    });
}
