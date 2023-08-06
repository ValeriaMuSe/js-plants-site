function renderRecommendation(recommendation) {
  const recommendationDiv = document.querySelector('.plant-info');
  recommendationDiv.innerHTML = `
    <h2>Recommended Plant</h2>
    <p>Name: ${recommendation.name}</p>
    <p>Soil: ${recommendation.soil}</p>
    <p>Pot: ${recommendation.pot}</p>
    <p>Color: ${recommendation.color}</p>
    <p>Extras: ${recommendation.extras.join(', ')}</p>
  `;
}

function clearRecommendation() {
  const recommendationDiv = document.querySelector('.plant-info');
  recommendationDiv.innerHTML = '';
}

export { renderRecommendation, clearRecommendation }