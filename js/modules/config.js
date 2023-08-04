
/// sirve
// const plantData = {
//   "Low Light Plants": [
//     { name: "Sansevieria", soilType: "Composted soil", potMaterial: "Clay", potStyle: "Simple", potColor: "Pink", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//     { name: "Boston Fern", soilType: "Fertilized soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Yellow", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//   ],
//   "Medium Light Plants": [
//     { name: "Aglaonema", soilType: "Composted soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Brown", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//     { name: "Monstera", soilType: "Fertilized soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Blue", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//   ],
//   "Outdoor Plants": [
//     { name: "Aloe Vera", soilType: "Composted soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Green", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//     { name: "Cactus", soilType: "Fertilized soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Purple", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//   ],
// };

// const plantData = {
//   "Low Light Plants": [
//     { name: "Sansevieria", soilType: "Composted soil", potMaterial: "Clay", potStyle: "Simple", potColor: "Pink", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//     { name: "Boston Fern", soilType: "Fertilized soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Yellow", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//   ],
//   "Medium Light Plants": [
//     { name: "Aglaonema", soilType: "Composted soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Brown", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//     { name: "Monstera", soilType: "Fertilized soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Blue", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//   ],
//   "Outdoor Plants": [
//     { name: "Aloe Vera", soilType: "Composted soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Green", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//     { name: "Cactus", soilType: "Fertilized soil", potMaterial: "Ceramic", potStyle: "Simple", potColor: "Purple", extras: ['Moss pole', 'Pebbles', 'Mini plants'] },
//   ],
// };

// export default plantData;

const potMaterials = {
  Overwater: "Clay pot",
  Underwater: "Ceramic pot",
  Neither: "Ceramic pot",
};

const potStyles = {
  "I like minimalism and material colors": "Simple pot",
  "I like some decoration and simple colors": "Simple pot decorated",
  "I like a lot of decoration and bright colors": "Painted pot decorated",
};

const plantData = {
  "Low Light Plants": [
    { name: "Sansevieria", soilType: "Composted soil", potMaterial: potMaterials.Overwater, potStyle: potStyles["I like minimalism and material colors"], potColor: "Pink", extras: [] },
    { name: "Boston Fern", soilType: "Fertilized soil", potMaterial: potMaterials.Neither, potStyle: potStyles["I like some decoration and simple colors"], potColor: "Yellow", extras: [] },
  ],
  "Medium Light Plants": [
    { name: "Aglaonema", soilType: "Composted soil", potMaterial: potMaterials.Neither, potStyle: potStyles["I like minimalism and material colors"], potColor: "Brown", extras: [] },
    { name: "Monstera", soilType: "Fertilized soil", potMaterial: potMaterials.Underwater, potStyle: potStyles["I like minimalism and material colors"], potColor: "Blue", extras: [] },
  ],
  "Outdoor Plants": [
    { name: "Aloe Vera", soilType: "Composted soil", potMaterial: potMaterials.Neither, potStyle: potStyles["I like a lot of decoration and bright colors"], potColor: "Green", extras: [] },
    { name: "Cactus", soilType: "Fertilized soil", potMaterial: potMaterials.Neither, potStyle: potStyles["I like minimalism and material colors"], potColor: "Purple", extras: [] },
  ],
};

export default plantData ;






