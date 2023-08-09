function renderRecommendation(recommendation) {
  const recommendationDiv = document.querySelector('.plant-info');

  recommendationDiv.innerHTML = `
  <p>The perfect plant for you is...</p>
    <h2>${recommendation.name}</h2>
    <img class="plant__image" src="${recommendation.image}" alt="" />
    <img class="plant__image image__position" src="${recommendation.potImage}" alt="" />
    <ul>
      <li>Name: ${recommendation.name}</li>
      <li>Soil: ${recommendation.soil}</li>
      <li>Pot: ${recommendation.pot}</li>
      <li>Color: ${recommendation.color}</li>
      <li>Extras: ${recommendation.extras.join(', ')}</li>
    </ul>
  `;
}

function clearRecommendation() {
  const recommendationDiv = document.querySelector('.plant-info');
  recommendationDiv.innerHTML = '';
}

export { renderRecommendation, clearRecommendation };





