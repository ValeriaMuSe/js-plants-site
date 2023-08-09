function getColorByPotStyle(style) {
  switch (style) {
    case 'simple':
      return 'clay'; 
    case 'simple-decorated':
      return 'blue'; 
    case 'painted-decorated':
      return 'yellow'; 
    default:
      return 'pink'; 
  }
}

export default getColorByPotStyle