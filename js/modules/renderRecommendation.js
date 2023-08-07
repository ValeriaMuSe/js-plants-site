function renderRecommendation(recommendation) {
  const recommendationDiv = document.querySelector('.plant-info');

  recommendationDiv.innerHTML = `
    <h2>${recommendation.name}</h2>
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

export { renderRecommendation, clearRecommendation }