/* eslint-disable no-else-return */
function getPotImageByStyle(style, watering) {
    if (watering === 'Overwater') {
      if (style === 'I like minimalism and material colors') {
        return './images/simple-clay-pot.png';
      } else if (style === 'I like some decoration and simple colors') {
        return './images/simple-clay-pot-decorated.png';
      } else if (style === 'I like a lot of decoration and bright colors') {
        return './images/painted-clay-pot-decorated.png';
      }
    } else if (watering === 'Underwater' || watering === 'Neither') {
      if (style === 'I like minimalism and material colors') {
        return './images/simple-ceramic-pot.png';
      } else if (style === 'I like some decoration and simple colors') {
        return './images/simple-ceramic-pot-decorated.png';
      } else if (style === 'I like a lot of decoration and bright colors') {
        return './images/painted-ceramic-pot-decorated.png';
      }
    }
    return './images/simple-clay-pot.png';
  }
  
export default getPotImageByStyle