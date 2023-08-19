// // recommendationStorage.js

// // Function to store the recommendation in local storage
// function storeRecommendation(recommendation) {
//   localStorage.setItem('recommendation', JSON.stringify(recommendation));
// }

// // Function to retrieve the recommendation from local storage
// function getRecommendation() {
//   const recommendationJSON = localStorage.getItem('recommendation');
//   if (recommendationJSON) {
//     return JSON.parse(recommendationJSON);
//   }
//   return null;
// }

// export { storeRecommendation, getRecommendation};

// recommendationStorage.js

// Function to store the recommendation in local storage
function storeRecommendation(recommendation) {
  localStorage.setItem('recommendation', JSON.stringify(recommendation));
}

// Function to retrieve the recommendation from local storage
function getRecommendation() {
  const recommendationJSON = localStorage.getItem('recommendation');
  if (recommendationJSON) {
    const recommendation = JSON.parse(recommendationJSON);
    console.log('soilImage:', recommendation.soilImage); // Add console.log statement
    return recommendation;
  }
  return null;
}

export { storeRecommendation, getRecommendation};
