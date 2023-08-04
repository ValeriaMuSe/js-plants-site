/* eslint-disable default-case */

function getPlantName(placeSelection, petsSelection) {
  let plantName = "";

  switch (placeSelection) {
    case "Inside with some indirect light":
      if (petsSelection === "Yes") {
        plantName = "Boston Fern";
      } else {
        plantName = "Sansevieria";
      }
      break;
    case "Inside with a lot of indirect light":
      if (petsSelection === "Yes") {
        plantName = "Monstera";
      } else {
        plantName = "Aglaonema";
      }
      break;
    case "Outside":
      if (petsSelection === "Yes") {
        plantName = "Cactus";
      } else {
        plantName = "Aloe Vera";
      }
      break;
    default:
      console.log("Invalid placeSelection");
      break;
  }

  return plantName;
}

export function getRecommendedPlantName(placeSelection, sunlightSelection, petsSelection, waterSelection, styleSelection) {
  if (waterSelection === "Overwater") {
    return "Peace Lily";
  }
  return getPlantName(placeSelection, petsSelection);
}



export function getRecommendedSoilType(sunlightSelection) {
  return sunlightSelection === "Yes" ? "Composted soil" : "Fertilized soil";
}

// export function getRecommendedPotMaterial(waterSelection, styleSelection) {
// let potMaterial = waterSelection !== "Overwater" ? "Ceramic pot" : "Clay pot";

// switch(styleSelection){
//   case "I like minimalism and material colors":
//       potMaterial += ", Simple pot";
//       break;
//   case "I like some decoration and simple colors":
//       potMaterial += ", Simple pot decorated";
//       break;
//   case "I like a lot of decoration and bright colors":
//       potMaterial += ", Painted pot decorated";
//       break;
// }

// return potMaterial;
// }

export function getRecommendedPotMaterial(waterSelection, styleSelection) {
  let potMaterial = waterSelection !== "Overwater" ? "Ceramic pot" : "Clay pot";
  let potDecorations = "";

  switch (styleSelection) {
    case "I like minimalism and material colors":
      potDecorations = "Simple pot";
      break;
    case "I like some decoration and simple colors":
      potDecorations = "Simple pot decorated";
      break;
    case "I like a lot of decoration and bright colors":
      potDecorations = "Painted pot decorated";
      break;
  }

  return { potMaterial, potDecorations };
}



export default getPlantName