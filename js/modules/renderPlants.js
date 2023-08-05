

// function getPlantImage(name) {
//   let formattedName;
//   switch(name) {
//     case "Sansevieria":
//       formattedName = "plant-sansevieria";
//       break;
//     case "Boston Fern":
//       formattedName = "plant-fern";
//       break;
//     case "Aglaonema":
//       formattedName = "plant-aglaonema";
//       break;
//     case "Monstera":
//       formattedName = "plant-monstera";
//       break;
//     case "Aloe Vera":
//       formattedName = "aloe-vera";
//       break;
//     case "Cactus":
//       formattedName = "plant-cactus";
//       break;
//     case "Peace Lily":
//       formattedName = "plant-peace-lily";
//       break;
//     default:
//       formattedName = name.replace(/\s/g, '-').toLowerCase();
//   }
  
//   return `./images/${formattedName}.png`;
// }


// function displayRecommendation(recommendation) {
//   const plantImage = getPlantImage(recommendation.name);
//   const plantInfo = document.querySelector(".plant-info");
//   plantInfo.innerHTML = `
//     <h2>${recommendation.name}</h2>
//     <img class="plant__image" src="${plantImage}" alt="">
//     <p>Soil: ${recommendation.soil}</p>
//     <p>Pot: ${recommendation.pot}</p>
//     <p>Color: ${recommendation.color}</p>
//     <p>Extras: ${recommendation.extras}</p>  <!-- Simplemente muestra la cadena de extras -->
//   `;
// }

// export default displayRecommendation;



