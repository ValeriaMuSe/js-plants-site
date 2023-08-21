import { getRecommendation } from '../localStorage/storage.js';
import soilObserver from './soilImageChange.js';
import extrasObserver from './extrasChange.js'; // Import the modified observer with a different name

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
    <div class="soil__image"></div>
    <div class="extras"></div>
    <ul class="plant__details">
      <li>Name: ${recommendation.name}</li>
      <li>Soil: ${recommendation.soil}</li>
      <li>Pot: ${recommendation.pot}</li>
      <li>Color: ${recommendation.color}</li>
      <li>Extras: ${recommendation.extras.join(', ')}</li>
    </ul>
    <a href="" id="customize-btn" class="get-btn avaibility-btn">Check store availability</a>
  `;

  soilObserver.subscribe('soilChange', soilObserver);
  extrasObserver.subscribe('extrasChange', extrasObserver); // Subscribe the ExtrasObserver to the Observer
}

export default renderRecommendationPage2;