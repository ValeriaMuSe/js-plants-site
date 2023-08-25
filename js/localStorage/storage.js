function storeRecommendation(recommendation) {
  localStorage.setItem('recommendation', JSON.stringify(recommendation));
}

function getRecommendation() {
  const recommendationJSON = localStorage.getItem('recommendation');
  if (recommendationJSON) {
    const recommendation = JSON.parse(recommendationJSON);
    return recommendation;
  }
  return null;
}

export { storeRecommendation, getRecommendation};