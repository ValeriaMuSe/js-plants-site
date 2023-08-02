

// renderPlants.js
export function displayRecommendation(recommendation) {
  const plantInfo = document.querySelector(".plant-info");
  plantInfo.innerHTML = `
    <h2>${recommendation.name}</h2>
    <img src="./images/mini-plants.png" alt="Plant Image">
    <p>Soil: ${recommendation.soil}</p>
    <p>Pot: ${recommendation.pot}</p>
    <p>Color: ${recommendation.color}</p>
    <p>Extras: ${recommendation.extras.join(", ")}</p>
  `;
}


