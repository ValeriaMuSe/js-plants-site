import './config.js'

// class Plants {
//     constructor() {
//       this.name = '';
//       this.soilType = '';
//       this.potMaterial = '';
//       this.potStyle = '';
//       this.potColor = '';
//       this.extras = [];
//     }
  
//     setName(name) {
//       this.name = name;
//       return this;
//     }
  
//     setSoilType(soilType) {
//       this.soilType = soilType;
//       return this;
//     }
  
//     setPotMaterial(potMaterial) {
//       this.potMaterial = potMaterial;
//       return this;
//     }
  
//     setPotStyle(potStyle) {
//       this.potStyle = potStyle;
//       return this;
//     }
  
//     setPotColor(potColor) {
//       this.potColor = potColor;
//       return this;
//     }
  
//     addExtra(extra) {
//       this.extras.push(extra);
//       return this;
//     }
//   }
  
//   const Sansevieria = new Plants('Sansevieria').setSoilType('Composted soil').setPotMaterial('Toxic plant').setPotStyle('Clay pot - Substitute the soil for the easy drainage soil').setPotColor('Simple pot').addExtra('Moss pole')

//   console.log(Sansevieria)



 // plants.js
export default class Plants {
    constructor() {
      this.name = '';
      this.soilType = '';
      this.potMaterial = '';
      this.potStyle = '';
      this.potColor = '';
      this.extras = [];
    }
  
    setName(name) {
      this.name = name;
      return this;
    }
  
    setSoilType(soilType) {
      this.soilType = soilType;
      return this;
    }
  
    setPotMaterial(potMaterial) {
      this.potMaterial = potMaterial;
      return this;
    }
  
    setPotStyle(potStyle) {
      this.potStyle = potStyle;
      return this;
    }
  
    setPotColor(potColor) {
      this.potColor = potColor;
      return this;
    }
  
    addExtra(extra) {
      this.extras.push(extra);
      return this;
    }
  }
  