

import { getRecommendation } from '../localStorage/storage.js';
import { potMaterialObserver } from './potMaterial.js';  
import { potDecorationObserver } from './potDecoration.js';

function renderRecommendationPage2() {
  const recommendation = getRecommendation();
  const recommendationDiv = document.querySelector('.plant-info');

  if (!recommendation || !recommendation.extrasImages) {
    recommendationDiv.innerHTML = '<p>No recommendation available.</p>';
    return;
  }

  recommendationDiv.innerHTML = `
    <div class="plant__title">
      <p>Preview</p>
      <h2>${recommendation.name}</h2>
    </div>
    <img class="plant__image" src="${recommendation.image}" alt="" />
    <img class="plant__image image__position" src="${recommendation.potImage}" alt="" />
    <img class="soil__image" src="${recommendation.soilImage}" alt="" />
    ${recommendation.extrasImages
      .map((image) => `<img class="extra__image ${image.className}" src="${image.src}" alt="" />`)
      .join('')}
    <ul class="plant__details">
      <li>Name: ${recommendation.name}</li>
      <li>Soil: ${recommendation.soil}</li>
      <li>Pot: ${recommendation.pot}</li>
      <li>Color: ${recommendation.color}</li>
      <li>Extras: ${recommendation.extras.join(', ')}</li>
    </ul>
    <a href="" id="customize-btn" class="get-btn avaibility-btn">Check store availability</a>
  `;


  potDecorationObserver.subscribe((event) => {
    const potImage = document.querySelector(".image__position");
    potImage.src = event.detail;
  });

  const selectedPotRadio = document.querySelector("[name='pot-material']:checked");
  const selectedPotMaterial = selectedPotRadio ? selectedPotRadio.value : null;

  if (selectedPotMaterial) {
    
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/${selectedPotMaterial}.png`;

   
    potMaterialObserver.publish(selectedPotMaterial);
  }
}

export default renderRecommendationPage2;


