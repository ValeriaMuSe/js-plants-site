import {renderRecommendation} from './renderRecommendation.js'

window.onload = function displayRecommendation() {
  const recommendation = JSON.parse(localStorage.getItem('plantRecommendation'));

  renderRecommendation(recommendation);
}