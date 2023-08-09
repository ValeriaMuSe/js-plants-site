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

  withCeramicMaterial() {
    this.pot = 'ceramic';
    return this;
  }

  withClayMaterial() {
    this.pot = 'clay';
    return this;
  }

  withPets(value) {
    this.pets = value
    return this;
  }

  withWateringMethod(value) {
    this.wateringMethod = value;
    return this;
  }


  withPotStyle(value) {
    this.potDecoration = value;
    this.color = getColorByPotStyle(value);
    this.potImage = getPotImageByStyle(value);
    return this;
  }

  withExtras(value) {
    this.extras = value;
    return this;
  }
}

export default PlantsBuilder;