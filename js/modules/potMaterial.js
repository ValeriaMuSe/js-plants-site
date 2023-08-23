

import Observer from '../observer.js';

const potMaterialObserver = new Observer("potMaterialChanged");

potMaterialObserver.subscribe((event) => {
  const selectedMaterial = event.detail;


const potImage = document.querySelector(".image__position");
potImage.src = `../../images/${selectedMaterial}.png`;

});

const potMaterialRadios = document.querySelectorAll("[name='pot-material']");
potMaterialRadios.forEach((radio) => {
  radio.addEventListener("click", (event) => {
    potMaterialObserver.publish(event.target.value);
  });
});

export { potMaterialObserver };



