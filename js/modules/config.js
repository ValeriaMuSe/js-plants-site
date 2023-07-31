// const plantConfig = [
//   {
//     light: 'low_light',
//     plants: [
//       {
//         toxic: true,
//         default: 'sansevieria',
//         overwater: 'peace-lily',
//       },
//       {
//         toxic: false,
//         default: 'boston-fern',
//         overwater: 'boston-fern',
//       },
//     ],
//   },
//   {
//     light: 'medium_light',
//     plants: [
//       {
//         toxic: true,
//         default: 'aglaonema',
//         overwater: 'peace-lily',
//       },
//       {
//         toxic: false,
//         default: 'monstera',
//         overwater: 'peace-lily',
//       },
//     ],
//   },
//   {
//     light: 'outdoor',
//     plants: [
//       {
//         toxic: true,
//         default: 'aloe-vera',
//         overwater: 'aloe-vera',
//       },
//       {
//         toxic: false,
//         default: 'cactus',
//         overwater: 'cactus',
//       },
//     ],
//   },
// ];

// export default plantConfig;


// config.js

// Definimos las plantas y sus características
const plantData = {
  "Low Light Plants": [
    { name: "Sansevieria", soilType: "Toxic", potMaterial: "Clay", potStyle: "Simple", potColor: "Material", extras: [] },
    { name: "Boston Fern", soilType: "Non-Toxic", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Material", extras: [] },
  ],
  "Medium Light Plants": [
    { name: "Aglaonema", soilType: "Toxic", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Material", extras: [] },
    { name: "Monstera", soilType: "Non-Toxic", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Material", extras: [] },
  ],
  "Outdoor Plants": [
    { name: "Aloe Vera", soilType: "Toxic", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Material", extras: [] },
    { name: "Cactus", soilType: "Non-Toxic", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Material", extras: [] },
  ],
};

export default plantData;
