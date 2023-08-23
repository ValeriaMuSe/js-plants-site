

import Observer from '../observer.js';



const potMaterialObserver = new Observer("potMaterialChanged");

potMaterialObserver.subscribe((event) => {
  const selectedMaterial = event.detail;

  const allPotColorOptions = document.querySelectorAll(".pot__container--color li");
  allPotColorOptions.forEach((option) => {
    option.style.display = "none";
  });

  const selectedPotOptions = document.querySelectorAll(`.${selectedMaterial}-color`);
  selectedPotOptions.forEach((option) => {
    option.style.display = "block";
  });


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



