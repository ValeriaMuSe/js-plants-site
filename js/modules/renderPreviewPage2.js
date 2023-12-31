import { getRecommendation, storeRecommendation } from '../localStorage/storage.js';
import { potMaterialObserver } from './potMaterial.js';  
import { potDecorationObserver } from './potDecoration.js';
import { potColorObserver } from './potColor.js';
import { extrasObserver, setupExtrasLogic } from './extrasChange.js';
import { soilObserver, setupSoilLogic } from './soilChange.js';
import { plantImageObserver } from './imageChange.js';
import Observer from '../observer.js'; 

export const potColorNameObserver = new Observer('potColorNameChange');

function renderRecommendationPage2() {
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

  storeRecommendation(recommendation);

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

  potDecorationObserver.subscribe((event) => {
    const potImage = document.querySelector(".image__position");
    potImage.src = event.detail;
  });

  potMaterialObserver.subscribe((event) => {
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/${event.detail}.png`;
  });

  potColorObserver.subscribe((event) => {
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/pots/${event.detail.potImage}`;

    const colorNameElement = document.getElementById('changeNamecolor');
    colorNameElement.textContent = `Color: ${event.detail.color}`;
  });

  const selectedPotRadio = document.querySelector("[name='pot-material']:checked");
  const selectedPotMaterial = selectedPotRadio ? selectedPotRadio.value : null;

  if (selectedPotMaterial) {
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/${selectedPotMaterial}.png`;

    potMaterialObserver.publish(selectedPotMaterial);
  }

  setupExtrasLogic();

  extrasObserver.subscribe(extra => {
    recommendation.extras.push(extra);
    updateExtrasSummary();
  });

  plantImageObserver.subscribe(event => {
    const plantImage = document.getElementById('plantImage');
    plantImage.src = event.detail;
  });

  setupSoilLogic();

  soilObserver.subscribe(soil => {
    recommendation.soil = soil;
    updateSoilSummary();
  });
}

export default renderRecommendationPage2;
