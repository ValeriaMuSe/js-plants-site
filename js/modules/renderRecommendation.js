
// function renderRecommendation(recommendation) {
//   const recommendationDiv = document.querySelector('.plant-info');
//   recommendationDiv.innerHTML = `
//     <h2>${recommendation.name}</h2>
//     <img class="plant__image" src="${recommendation.image}" alt="" />
//     <ul>
//       <li><strong>Name:</strong> ${recommendation.name}</li>
//       <li><strong>Soil:</strong> ${recommendation.soil}</li>
//       <li><strong>Pot:</strong> ${recommendation.pot}</li>
//       <li><strong>Color:</strong> ${recommendation.color}</li>
//       <li><strong>Extras:</strong> ${recommendation.extras.join(', ')}</li>
//     </ul>
//   `;
// }

function renderRecommendation(recommendation) {
  const recommendationDiv = document.querySelector('.plant-info');

  recommendationDiv.innerHTML = `<div class="title__container">
  <p>The perfect plant for you is...</p>
    <h2>${recommendation.name}</h2>
    </div>
    <img class="plant__image" src="${recommendation.image}" alt="" />
    <img class="plant__image image__position" src="${recommendation.potImage}" alt="Pot Image" /> 
    <div class="characteristics__container">
    <ul>
      <li>Name: ${recommendation.name}</li>
      <li>Soil: ${recommendation.soil}</li>
      <li>Pot: ${recommendation.pot}</li>
      <li>Color: ${recommendation.color}</li>
      <li>Extras: ${recommendation.extras.join(', ')}</li>
    </ul>
    </div>
  `;
}

function clearRecommendation() {
  const recommendationDiv = document.querySelector('.plant-info');
  recommendationDiv.innerHTML = '';
}

export { renderRecommendation, clearRecommendation };





