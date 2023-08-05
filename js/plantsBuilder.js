import './modules/config.js'


class PlantsBuilder {

  withPlantName(name) {
    this.name = name;
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

  withPets() {
    this.isToxic = false;
    return this;
  }
  
  withNotPets() {
    this.isToxic = true;
    return this;
  }

  withPotStyle(value) {
    this.potDecoration = value;
    return this;
  }

  withExtras(value) {
    this.extras = value;
    return this;
  }

}

export default PlantsBuilder;


