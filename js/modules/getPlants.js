/* eslint-disable default-case */

// // getPlants.js
// export function getRecommendedPlantName() {
//   // Implement your logic to determine the recommended plant based on user selections
//   // For demonstration purposes, we'll return some example plant names
//   return "Recommended Plant";
// }

// export function getRecommendedSoilType() {
//   // Implement your logic to determine the recommended soil type based on user selections
//   // For demonstration purposes, we'll return some example soil types
//   return "Recommended Soil Type";
// }

// export function getRecommendedPotMaterial() {
//   // Implement your logic to determine the recommended pot material based on user style selection
//   // For demonstration purposes, we'll return some example pot materials
//   return "Clay";
// }

// export function getRecommendedPotColor() {
//   // Implement your logic to determine the recommended pot color based on user style selection
//   // For demonstration purposes, we'll return some example pot colors
//   return "Blue";
// }


// function getPlantName(placeSelection, petsSelection, waterSelection){
//   let plantName = "";
//   switch(placeSelection){
//     case "Inside with some indirect light":
//       plantName = petsSelection === "Yes" ? "Boston Fern" : "Sansevieria";
//       break;
//     case "Inside with a lot of indirect light":
//       plantName = petsSelection === "Yes" ? "Monstera" : "Aglaonema";
//       break;
//     case "Outside":
//       plantName = petsSelection === "Yes" ? "Cactus" : "Aloe vera";
//       break;
//   }

//   if (waterSelection === "Overwater") {
//     if (petsSelection === "Yes") {
//       if (placeSelection === "Inside with some indirect light") {
//         plantName = "Boston Fern";
//       } else if (placeSelection === "Inside with a lot of indirect light") {
//         plantName = "Monstera";
//       }
//     } else {
//       plantName = "Peace Lily";
//     }
//   }

//   return plantName;
// }
function getPlantName(placeSelection, petsSelection, waterSelection){
  let plantName = "";
  switch(placeSelection){
    case "Inside with some indirect light":
      if (petsSelection === "Yes") {
        plantName = "Boston Fern";
      } else if (waterSelection === "Overwater") {
        plantName = "Peace Lily";
      } else {
        plantName = "Sansevieria";
      }
      break;
    case "Inside with a lot of indirect light":
      if (petsSelection === "Yes") {
        plantName = "Monstera";
      } else if (waterSelection === "Overwater") {
        plantName = "Peace Lily";
      } else {
        plantName = "Aglaonema";
      }
      break;
    case "Outside":
      plantName = petsSelection === "Yes" ? "Cactus" : "Aloe vera";
      break;
  }

  return plantName;
}

export function getRecommendedPlantName(placeSelection, sunlightSelection, petsSelection, waterSelection, styleSelection) {
  if (waterSelection === "Overwater") {
    return "Peace Lily";
  } 
  return getPlantName(placeSelection, petsSelection, waterSelection);
}


export function getRecommendedSoilType(sunlightSelection) {
  return sunlightSelection === "Yes" ? "Composted soil" : "Fertilized soil";
}

export function getRecommendedPotMaterial(waterSelection, styleSelection) {
let potMaterial = waterSelection !== "Overwater" ? "Ceramic pot" : "Clay pot";

switch(styleSelection){
  case "I like minimalism and material colors":
      potMaterial += ", Simple pot";
      break;
  case "I like some decoration and simple colors":
      potMaterial += ", Simple pot decorated";
      break;
  case "I like a lot of decoration and bright colors":
      potMaterial += ", Painted pot decorated";
      break;
}

return potMaterial;
}

export default getPlantName