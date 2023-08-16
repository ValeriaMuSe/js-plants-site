function renderRecommendationPage2(recommendation) {
  const recommendationDiv = document.querySelector('.plant-info');

  recommendationDiv.innerHTML = `
    <div class="plant__title">
      <p>Preview</p>
    </div>
    <img class="plant__image plant__preview" src="${recommendation.image}" alt="" />
    <img class="plant__image image__position pot__position" src="${recommendation.potImage}" alt="" />
    <ul class="plant__details card-details--margin">
      <li>Name: ${recommendation.name}</li>
      <li>Soil: ${recommendation.soil}</li>
      <li>Pot: ${recommendation.pot}</li>
      <li>Color: ${recommendation.color}</li>
      <li>Extras: ${recommendation.extras.join(', ')}</li>
    </ul>
    <a href="" id="customize-btn" class="get-btn avaibility-btn">Check store avaibility</a>
  `;
}

window.onload = function displayRecommendation() {
  const recommendation = JSON.parse(localStorage.getItem('plantRecommendation'));

  renderRecommendationPage2(recommendation);
}

export default renderRecommendationPage2