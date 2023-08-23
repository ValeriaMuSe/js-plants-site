import Observer from '../observer.js';

const potDecorationObserver = new Observer('potDecorationChange');

const yesDecorationButton = document.getElementById('yes-decoration');
const noDecorationButton = document.getElementById('no-decoration');  

yesDecorationButton.addEventListener('click', () => {
  const selectedPotRadio = document.querySelector("[name='pot-material']:checked");
  const selectedPotMaterial = selectedPotRadio ? selectedPotRadio.value : null;

  if (selectedPotMaterial) {
    const decoratedPotImage = `../../images/${selectedPotMaterial}-decorated.png`;
    const potImage = document.querySelector(".image__position");
    potImage.src = decoratedPotImage;

    potDecorationObserver.publish(decoratedPotImage);
  }
});

noDecorationButton.addEventListener('click', () => {
  const selectedPotRadio = document.querySelector("[name='pot-material']:checked");
  const selectedPotMaterial = selectedPotRadio ? selectedPotRadio.value : null;

  if (selectedPotMaterial) {
    const potImage = document.querySelector(".image__position");
    potImage.src = `../../images/${selectedPotMaterial}.png`;  

    potDecorationObserver.publish(`../../images/${selectedPotMaterial}.png`);
  }
});

export { potDecorationObserver };



