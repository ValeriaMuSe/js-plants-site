
function renderRecommendation(recommendation) {
  const recommendationDiv = document.querySelector('.plant-info');
  recommendationDiv.innerHTML = `
    <h2>${recommendation.name}</h2>
    <img class="plant__image" src="${recommendation.image}" alt="" />
    <ul>
      <li><strong>Name:</strong> ${recommendation.name}</li>
      <li><strong>Soil:</strong> ${recommendation.soil}</li>
      <li><strong>Pot:</strong> ${recommendation.pot}</li>
      <li><strong>Color:</strong> ${recommendation.color}</li>
      <li><strong>Extras:</strong> ${recommendation.extras.join(', ')}</li>
    </ul>
  `;
}

function clearRecommendation() {
  const recommendationDiv = document.querySelector('.plant-info');
  recommendationDiv.innerHTML = '';
}

export { renderRecommendation, clearRecommendation };





