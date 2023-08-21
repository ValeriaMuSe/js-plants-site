import Observer from '../publisher.js';

const observer = new Observer();

const soilImages = {
  'composted-soil': '../../images/soil-composted.png',
  'fertilized-soil': '../../images/soil-fertilized.png',
  'drainage-soil': '../../images/soil-drainage.png'
};

const soilForm = document.getElementById('soilForm');
const radioButtons = soilForm.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    const selectedSoil = Array.from(soilForm.querySelectorAll('input[name="soil"]'))
      .filter(radio => radio.checked)
      .map(radio => radio.value);

    console.log("Publishing selected soil:", selectedSoil);
    observer.publish('soilChange', selectedSoil);
  });
});

class SoilObserver {
  constructor() {
    this.soilImageHtml = '';
  }

  update(selectedSoil) {
    let updatedSelectedSoil = selectedSoil;
    if (!Array.isArray(selectedSoil)) {
      updatedSelectedSoil = [selectedSoil]; // Convert to an array if it's not already
    }
  
    this.soilImageHtml = updatedSelectedSoil
      .map(soil => `<img class="soil__image" src="${soilImages[soil]}" alt="" />`)
      .join('');
  
    this.updateHTML();
  }
  
  updateHTML() {
    const soilDiv = document.querySelector('.soil__image');
    soilDiv.innerHTML = this.soilImageHtml;
  }
}

const soilObserver = new SoilObserver();

observer.subscribe('soilChange', soilObserver); // Subscribe the SoilObserver to the Observer

export default observer;