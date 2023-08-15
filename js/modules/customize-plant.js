import {renderRecommendation} from './renderRecommendation.js'

window.onload = function displayRecommendation() {
  // Get plant recommendation from local storage
  const recommendation = JSON.parse(localStorage.getItem('plantRecommendation'));

  // Use the renderRecommendation function to display the recommendation:
  renderRecommendation(recommendation)
}