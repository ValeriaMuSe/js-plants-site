import buildRecommendation from './buildRecommendation.js';
import { renderRecommendation, clearRecommendation } from './renderRecommendation.js';

const initializeFormLogic = () => {
  const form = document.getElementById('plants-form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const place = document.querySelector('input[name="place"]:checked').value;
    const soilType = document.querySelector('input[name="soilType"]:checked').value;
    const toxicPlant = document.querySelector('input[name="toxicPlant"]:checked').value;
    const water = document.querySelector('input[name="water"]:checked').value;
    const stylePot = document.querySelector('input[name="stylePot"]:checked').value;
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);

    const recommendation = buildRecommendation(place, soilType, toxicPlant, water, stylePot, extras);
    renderRecommendation(recommendation);

    // Redirect to the second page:
    window.location.href = '../../customize-plant.html';
  });

  const clearButton = document.querySelector('.clear-btn');

  clearButton.addEventListener('click', () => {
    form.reset();
    clearRecommendation();
  });
};

export default initializeFormLogic;