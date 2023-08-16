import { getColorByPotStyle, getPotImageByStyle}  from './modules/config.js';

class PlantsBuilder {

  withPlant(plant) {
    this.name = plant.name;
    return this;
  }

  withImage(value) {
    this.image = value;
    return this;
  }

  withSoilType(value) {
    this.soil = value;
    return this;
  }

  withSoilImage(value) {
    this.soilImage = value;
    return this;
  }

  withCeramicMaterial() {
    this.pot = 'ceramic';
    this.wateringMethod = 'Underwater';
    return this;
  }
  
  withClayMaterial() {
    this.pot = 'clay';
    this.wateringMethod = 'Overwater';
    return this;
  }

  withPets(value) {
    this.pets = value
    return this;
  }
  
  withWateringMethod(value) {
    this.wateringMethod = value;
    if (value === 'Neither') {
      this.withCeramicMaterial();
    }
    return this;
  }

  withPotStyle(value) {
    this.potDecoration = value;
    this.color = getColorByPotStyle(value);
    this.potImage = getPotImageByStyle(value, this.wateringMethod);
    return this;
  }

  withExtras(value) {
    this.extras = value;
    return this;
  }

  withExtrasImages(images) {
    this.extrasImages = images;
    return this;
  }
}

export default PlantsBuilder;