function renderRecommendation(recommendation) {
  const recommendationDiv = document.querySelector('.plant-info');

  if (!recommendation || !recommendation.extrasImages) {
    recommendationDiv.innerHTML = '<p>No recommendation available.</p>';
    return;
  }

  recommendationDiv.innerHTML = `
    <div class="plant__title">
      <p>The perfect plant for you is...</p>
      <h2>${recommendation.name}</h2>
    </div>
    <img class="plant__image" src="${recommendation.image}" alt="" />
    <img class="plant__image image__position" src="${recommendation.potImage}" alt="" />
    <img class="soil__image" src="" alt="" />
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
    <a href="../../customize-plant.html" id="customize-btn" class="get-btn customize-btn">Customize!</a>
  `;

  const sunlightValue = document.querySelector('input[name="soilType"]:checked').value;
  const soilImage = document.querySelector('.soil__image');

  if (sunlightValue === 'soil-composted') {
    soilImage.src = "../../images/soil-composted.png";
  } else if (sunlightValue === 'soil-fertilized') {
    soilImage.src = "../../images/soil-fertilized.png";
  }
}

function clearRecommendation() {
  const recommendationDiv = document.querySelector('.plant-info');
  recommendationDiv.innerHTML = '';
}

export { renderRecommendation, clearRecommendation };