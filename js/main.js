/* eslint-disable no-console */


// Este codigo es funcional pero en main de aqui se puede sacar la version funcional para el sitio 
// // Define the PlantRecommendationBuilder using the Builder pattern
// class PlantRecommendationBuilder {
//   constructor() {
//     this.recommendation = {};
//   }

//   // Set the name of the plant
//   withPlantName(name) {
//     this.recommendation.name = name;
//     return this;
//   }

//   // Set the type of soil
//   withSoilType(soilType) {
//     this.recommendation.soil = soilType;
//     return this;
//   }

//   // Set the material and style of the pot
//   withPotMaterial(material, style) {
//     this.recommendation.pot = `${material} pot with ${style} decorations`;
//     return this;
//   }

//   // Set the color of the pot
//   withPotColor(color) {
//     this.recommendation.color = color;
//     return this;
//   }

//   // Add extras to the recommendation (moss pole, mini plants, pebbles)
//   withExtras(extras) {
//     this.recommendation.extras = extras;
//     return this;
//   }

//   // Build the final recommendation object
//   build() {
//     return this.recommendation;
//   }
// }

// // Function to handle form submission and generate the recommendation
// // ... (Previous code)

// // Function to handle form submission and generate the recommendation
// function getPlantRecommendation() {
//   const placeForm = document.getElementById("placeForm"); // Corrected ID
//   const sunlightForm = document.getElementById("sunlightForm"); // Corrected ID
//   const petsForm = document.getElementById("petsForm"); // Corrected ID
//   const waterForm = document.getElementById("waterForm"); // Corrected ID
//   const styleForm = document.getElementById("styleForm"); // Corrected ID
//   const extrasForm = document.getElementById("extrasForm"); // Corrected ID



//   // Get user's selections
//   const placeSelection = placeForm.querySelector('input[name="place"]:checked').value;
//   const sunlightSelection = sunlightForm.querySelector('input[name="sunlight"]:checked').value;
//   const petsSelection = petsForm.querySelector('input[name="pets"]:checked').value;
//   const waterSelection = waterForm.querySelector('input[name="water"]:checked').value;
//   const styleSelection = styleForm.querySelector('input[name="style"]:checked').value;
//   const extrasSelections = Array.from(extrasForm.querySelectorAll('input[name="extras"]:checked')).map((el) => el.value);

//   // Create the recommendation using the Builder pattern
//   const recommendation = new PlantRecommendationBuilder()
//     .withPlantName(getRecommendedPlantName(placeSelection, sunlightSelection, petsSelection, waterSelection, styleSelection))
//     .withSoilType(getRecommendedSoilType(placeSelection, sunlightSelection))
//     .withPotMaterial(getRecommendedPotMaterial(styleSelection))
//     .withPotColor(getRecommendedPotColor(styleSelection))
//     .withExtras(extrasSelections)
//     .build();

//   // Display the recommendation on the page
//   displayRecommendation(recommendation);
// }

// // Function to display the plant recommendation on the page
// function displayRecommendation(recommendation) {
//   const plantInfo = document.querySelector(".plant-info");
//   plantInfo.innerHTML = `
//     <h2>${recommendation.name}</h2>
//     <img src="./images/mini-plants.png" alt="Plant Image">
//     <p>Soil: ${recommendation.soil}</p>
//     <p>Pot: ${recommendation.pot}</p>
//     <p>Color: ${recommendation.color}</p>
//     <p>Extras: ${recommendation.extras.join(", ")}</p>
//   `;
// }

// // Function to get the recommended plant name based on user selections
// function getRecommendedPlantName(place, sunlight, pets, water, style) {
//   // Implement your logic to determine the recommended plant based on user selections
//   // For demonstration purposes, we'll return some example plant names
//   return "Recommended Plant";
// }

// // Function to get the recommended soil type based on user selections
// function getRecommendedSoilType(place, sunlight) {
//   // Implement your logic to determine the recommended soil type based on user selections
//   // For demonstration purposes, we'll return some example soil types
//   return "Recommended Soil Type";
// }

// // Function to get the recommended pot material based on user style selection
// function getRecommendedPotMaterial(style) {
//   // Implement your logic to determine the recommended pot material based on user style selection
//   // For demonstration purposes, we'll return some example pot materials
//   return "Clay";
// }

// // Function to get the recommended pot color based on user style selection
// function getRecommendedPotColor(style) {
//   // Implement your logic to determine the recommended pot color based on user style selection
//   // For demonstration purposes, we'll return some example pot colors
//   return "Blue";
// }

// // Function to clear the form selections
// function clearForm() {
//   const formElements = document.querySelectorAll("form");
//   formElements.forEach((form) => form.reset());
//   const plantInfo = document.querySelector(".plant-info");
//   plantInfo.innerHTML = "";
// }

// // Attach event listeners to the buttons
// const getBtn = document.querySelector(".get-btn");
// getBtn.addEventListener("click", getPlantRecommendation);

// const clearBtn = document.querySelector(".clear-btn");
// clearBtn.addEventListener("click", clearForm);


// ///este es un posible codigo!
// import { getPlants } from './modules/getPlants.js';
// import createPlantInfoCard from './modules/renderPlants.js';
// import Plants from './modules/plants.js'; // Asegúrate de que la ruta sea correcta

// document.querySelector('.get-btn').addEventListener('click', (event) => {
//   event.preventDefault(); // Evita que el formulario se envíe
//   const formData = {
//     "WhereToPlace": getSelectedRadioValue('placeForm'),
//     "Sunlight": getSelectedRadioValue('sunlightForm'),
//     "Pets": getSelectedRadioValue('petsForm'),
//     "WateringHabits": getSelectedRadioValue('waterForm'),
//     "Style": getSelectedRadioValue('styleForm'),
//     "Extras": getSelectedCheckboxesValues('extrasForm'),
//   };

//   const recommendedPlant = getRecommendedPlant(formData);
//   if (recommendedPlant) {
//     displayRecommendation(recommendedPlant);
//   } else {
//     displayErrorMessage();
//   }
// });

// document.querySelector('.clear-btn').addEventListener('click', (event) => {
//   event.preventDefault(); // Evita que el formulario se envíe
//   const plantInfoContainer = document.querySelector('.plant-info');
//   plantInfoContainer.innerHTML = '';
//   plantInfoContainer.style.display = 'none';
//   clearForm();
// });

// // Función para obtener el valor seleccionado en un conjunto de radio buttons
// function getSelectedRadioValue(formId) {
//   const form = document.getElementById(formId);
//   const selectedOption = form.querySelector('input:checked');
//   return selectedOption ? selectedOption.value : null;
// }

// // Función para obtener los valores seleccionados en un conjunto de checkboxes
// function getSelectedCheckboxesValues(formId) {
//   const form = document.getElementById(formId);
//   const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
//   return Array.from(checkboxes).map((checkbox) => checkbox.value);
// }

// // Function to get the recommended plant based on user selections
// function getRecommendedPlant(formData) {
//   // Implement your logic to determine the recommended plant based on user selections
//   // For demonstration purposes, we'll return some example plant data
//   const recommendedPlantData = {
//     name: "Recommended Plant",
//     soil: "Recommended Soil Type",
//     pot: "Clay Pot",
//     color: "Blue",
//     extras: ["Moss pole", "Pebbles"],
//   };
//   return new Plants().setName(recommendedPlantData.name)
//     .setSoilType(recommendedPlantData.soil)
//     .setPotMaterial("Clay")
//     .setPotStyle("Simple")
//     .setPotColor(recommendedPlantData.color)
//     .addExtra(...recommendedPlantData.extras);
// }

// // Function to display the plant recommendation on the page
// function displayRecommendation(recommendation) {
//   const plantInfo = document.querySelector(".plant-info");
//   plantInfo.innerHTML = `
//     <h2>${recommendation.name}</h2>
//     <img src="./images/mini-plants.png" alt="Plant Image">
//     <p>Soil: ${recommendation.soil}</p>
//     <p>Pot: ${recommendation.pot}</p>
//     <p>Color: ${recommendation.color}</p>
//     <p>Extras: ${recommendation.extras.join(", ")}</p>
//   `;

//   // Mostramos el contenedor con la información de la planta
//   plantInfo.style.display = 'block';
// }

// // Function to display an error message if no recommendation is found
// function displayErrorMessage() {
//   const plantInfo = document.querySelector(".plant-info");
//   plantInfo.innerHTML = "<p>No plant recommendation found for these selections.</p>";

//   // Mostramos el contenedor con el mensaje de error
//   plantInfo.style.display = 'block';
// }

// // Function to clear the form selections
// function clearForm() {
//   const formElements = document.querySelectorAll("form");
//   formElements.forEach((form) => form.reset());
// }


import PlantRecommendationBuilder from './modules/plants.js';
import displayRecommendation from './modules/renderPlants.js';
import plantData from './modules/config.js';
import { getRecommendedPotMaterial } from './modules/getPlants.js';


function getSelectedOption(formId) {
  const form = document.getElementById(formId);
  const selection = form.querySelector('input[type="radio"]:checked');
  return selection ? selection.value : null;
}

function getRecommendedPlantType(place) {
  if (place === "Inside with some indirect light") {
    return "Low Light Plants";
  } else if (place === "Inside with a lot of indirect light") {
    return "Medium Light Plants";
  } else if (place === "Outside") {
    return "Outdoor Plants";
  }
  return "";
}




function getPlantRecommendation() {
  const placeSelection = getSelectedOption("placeForm");
  const sunlightSelection = getSelectedOption("sunlightForm");
  const petsSelection = getSelectedOption("petsForm");
  const waterSelection = getSelectedOption("waterForm");
  const styleSelection = getSelectedOption("styleForm");
  const extrasSelections = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(el => el.value);
  const potMaterials = getRecommendedPotMaterial(waterSelection, styleSelection);
 

  if (!placeSelection || !sunlightSelection || !petsSelection || !waterSelection || !styleSelection) {
    // Handle error or show a message to the user
    return;
  }

  const recommendedPlantType = getRecommendedPlantType(placeSelection);
  const recommendedPlants = plantData[recommendedPlantType];

  const randomIndex = Math.floor(Math.random() * recommendedPlants.length);
  const recommendedPlant = recommendedPlants[randomIndex];


  const recommendation = new PlantRecommendationBuilder()
    .withPlantName(recommendedPlant.name)
    .withSoilType(recommendedPlant.soilType)
    .withPotMaterial(potMaterials.potMaterial)
    .withPotColor(recommendedPlant.potColor)
    .withExtras(extrasSelections.join(", ")) 
    .build();

  displayRecommendation(recommendation);
}

function clearForm() {
  const formElements = document.querySelectorAll("form");
  formElements.forEach(form => form.reset());
  const plantInfo = document.querySelector(".plant-info");
  plantInfo.innerHTML = "";
}

const getBtn = document.querySelector(".get-btn");
getBtn.addEventListener("click", getPlantRecommendation);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearForm);


