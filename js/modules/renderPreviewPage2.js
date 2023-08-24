import { getRecommendation } from '../localStorage/storage.js';
import { potMaterialObserver } from './potMaterial.js';  
import { potDecorationObserver } from './potDecoration.js';
import { potColorObserver } from './potColor.js';
import { extrasObserver, setupExtrasLogic } from './extrasChange.js';

function renderRecommendationPage2() {
  const recommendation = getRecommendation();
  const recommendationDiv = document.querySelector('.plant-info');

  if (!recommendation || !recommendation.extrasImages) {
    recommendationDiv.innerHTML = '<p>No recommendation available.</p>';
    return;
  }

  const extrasImagesHtml = recommendation.extrasImages
    .map(image => `<img class="${image.className}" src="${image.src}" alt="" />`)
    .join('');

  recommendationDiv.innerHTML = `
    <div class="plant__title">
      <p>Preview</p>
      <h2>${recommendation.name}</h2>
    </div>
    <img class="plant__image" src="${recommendation.image}" alt="" />
    <img class="plant__image image__position" src="${recommendation.potImage}" alt="" />
    <img class="soil__image" src="${recommendation.soilImage}" alt="" />
    <div class="extras">${extrasImagesHtml}</div>
    <ul class="plant__details">
      <li>Name: ${recommendation.name}</li>
      <li>Soil: ${recommendation.soil}</li>
      <li>Pot: ${recommendation.pot}</li>
      <li>Color: ${recommendation.color}</li>
      <li>Extras: ${recommendation.extras.join(', ')}</li>
    </ul>
    <a href="" id="customize-btn" class="get-btn avaibility-btn">Check store availability</a>
  `;

  // Suscribirse al evento de cambio de decoración del tiesto
  potDecorationObserver.subscribe((event) => {
    const potImage = document.querySelector(".image__position");
    potImage.src = event.detail;
  });

  // Suscribirse al evento de cambio de material del tiesto
  potMaterialObserver.subscribe((event) => {
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/${event.detail}.png`;
  });

  // Suscribirse al evento de cambio de color de maceta
  potColorObserver.subscribe((event) => {
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/pots/${event.detail.potImage}`;

    // Cambiar la imagen de decoración del tiesto aquí
    // Por ejemplo: const potDecorationImage = event.detail.potDecorationImage;
  });

  const selectedPotRadio = document.querySelector("[name='pot-material']:checked");
  const selectedPotMaterial = selectedPotRadio ? selectedPotRadio.value : null;

  if (selectedPotMaterial) {
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/${selectedPotMaterial}.png`;

    // Publicar el evento de cambio de material del tiesto
    potMaterialObserver.publish(selectedPotMaterial);
  }

  setupExtrasLogic();

  extrasObserver.subscribe(extra => {
    recommendation.extras.push(extra);
  });
}

export default renderRecommendationPage2;




