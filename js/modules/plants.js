import './config.js'

// plants.js
class PlantRecommendationBuilder {
  constructor() {
    this.recommendation = {};
  }

  // Set the name of the plant
  withPlantName(name) {
    this.recommendation.name = name;
    return this;
  }

  // Set the type of soil
  withSoilType(soilType) {
    this.recommendation.soil = soilType;
    return this;
  }

  // Set the material and style of the pot
  withPotMaterial(material, style) {
    this.recommendation.pot = `${material} pot with ${style} decorations`;
    return this;
  }

  // Set the color of the pot
  withPotColor(color) {
    this.recommendation.color = color;
    return this;
  }

  // Add extras to the recommendation (moss pole, mini plants, pebbles)
  withExtras(extras) {
    this.recommendation.extras = extras;
    return this;
  }

  // Build the final recommendation object
  build() {
    return this.recommendation;
  }
}

export default PlantRecommendationBuilder;


