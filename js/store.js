import { getRecommendation } from './localStorage/storage.js';

function renderStoredRecommendation() {
  const recommendation = getRecommendation();
  const recommendationDiv = document.querySelector('.plant-info');

  if (!recommendation || !recommendation.extrasImages) {
    recommendationDiv.innerHTML = '<p>No recommendation available.</p>';
    return;
  }

  const extrasSummaryHtml = 'Extras: ' + (recommendation.extras.length > 0 ? recommendation.extras.join(', ') : '');

  const extrasImagesHtml = recommendation.extrasImages
    .map(image => `<img class="${image.className}" src="${image.src}" alt="" />`)
    .join('');

  let soilImagesHtml = '';
  if (Array.isArray(recommendation.soilImages)) {
    soilImagesHtml = recommendation.soilImages
      .map(image => `<img class="${image.className}" src="${image.src}" alt="" />`)
      .join('');
  } else {
    soilImagesHtml = '';
  }

  recommendationDiv.innerHTML = `
    <div class="plant__title">
      <p>Preview</p>
      <h2>${recommendation.name}</h2>
    </div>
    <img class="plant__image" id="plantImage" src="${recommendation.image}" alt="" />
    <img class="plant__image image__position" src="${recommendation.potImage}" alt="" />
    <div class="soil">${soilImagesHtml}</div>
    <div class="extras">${extrasImagesHtml}</div>
    <ul class="plant__details">
      <li>Name: ${recommendation.name}</li>
      <li id="soil-summary">Soil: ${recommendation.soil}</li>
      <li>Pot: ${recommendation.pot}</li>
      <li id="changeNamecolor">Color: ${recommendation.color}</li>
      <li id="extras-summary">${extrasSummaryHtml}</li>
    </ul>
    <a href="../../store.html" id="customize-btn" class="get-btn avaibility-btn">Check store availability</a>
  `;
}

renderStoredRecommendation();

export default renderStoredRecommendation;