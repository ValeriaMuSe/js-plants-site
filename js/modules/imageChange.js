import Observer from '../observer.js'; 

const plantImageObserver = new Observer('plantImageChange');


function handlePlantSelection() {
  const plantDropdown = document.querySelector('.dropdown');
  const selectedOption = plantDropdown.options[plantDropdown.selectedIndex];
  const selectedValue = selectedOption.value;

  if (selectedValue !== '') {
    const imageName = selectedValue + '.png';
    const imagePath = `../../images/${imageName}`;

   
    plantImageObserver.publish(imagePath);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const plantDropdown = document.querySelector('.dropdown');
  plantDropdown.addEventListener('change', handlePlantSelection);
});

export {plantImageObserver }


