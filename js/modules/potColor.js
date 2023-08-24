import Observer from '../observer.js'; 

export const potColorObserver = new Observer('potColorChange');


export const potColorNameObserver = new Observer('potColorNameChange');

function handlePotColorButtonClick(buttonValue, color) {
  const selectedPotRadio = document.querySelector("[name='pot-material']:checked");
  const selectedDecorationRadio = document.querySelector("[name='pot-decoration']:checked");
  const selectedPotMaterial = selectedPotRadio ? selectedPotRadio.value : null;
  const selectedDecoration = selectedDecorationRadio ? selectedDecorationRadio.value : null;

  let potImage = '';
  let potColorName = ''; 

  if (selectedPotMaterial === "simple-ceramic-pot") {
    potImage = `../../images/pots/ceramic-simple-${color}.png`;
    potColorName = color; 
  } else if (selectedPotMaterial === "simple-clay-pot") {
    potImage = `../../images/pots/clay-simple-${color}.png`;
    potColorName = color; 
  }

  if (selectedDecoration === "yes-decoration") {
    if (selectedPotMaterial === "simple-ceramic-pot") {
      potImage = `../../images/pots/ceramic-decorated-${color}.png`;
      potColorName = color; 
    } else if (selectedPotMaterial === "simple-clay-pot") {
      potImage = `../../images/pots/clay-decorated-${color}.png`;
      potColorName = color; 
    }
  }

  
  potColorObserver.publish({ potImage, color: color });
}


const bluePotButton = document.querySelector("input[value='blue-pot']");
bluePotButton.addEventListener('click', () => handlePotColorButtonClick('blue', 'blue'));

const pinkPotButton = document.querySelector("input[value='pink-pot']");
pinkPotButton.addEventListener('click', () => handlePotColorButtonClick('pink', 'pink'));

const greenPotButton = document.querySelector("input[value='green-pot']");
greenPotButton.addEventListener('click', () => handlePotColorButtonClick('green', 'green'));

const purplePotButton = document.querySelector("input[value='purple-pot']");
purplePotButton.addEventListener('click', () => handlePotColorButtonClick('purple', 'purple'));
