function storeRecommendation(recommendation) {
  localStorage.setItem('recommendation', JSON.stringify(recommendation));
}

// Function to retrieve the recommendation from local storage
function getRecommendation() {
  const recommendationJSON = localStorage.getItem('recommendation');
  if (recommendationJSON) {
    const recommendation = JSON.parse(recommendationJSON);
    return recommendation;
  }
  return null;
}

export { storeRecommendation, getRecommendation};