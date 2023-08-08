class PlantsBuilder {

  withPlant(plant) {
    this.name = plant.name;
    this.image = plant.image;
    return this;
  }
  
  getPlantName() {
    if (!this.name) {
      return 'No plant was set.';
    }
    return this.name;
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

  withWateringMethod(value) {
    this.wateringMethod = value;
    return this;
  }

}

export default PlantsBuilder;