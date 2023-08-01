// export function getFormData() {
//     const formData = {};
  
//     const placeForm = document.getElementById("placeForm");
//     formData["place"] = placeForm.place.value;
  
//     const sunlightForm = document.getElementById("sunlightForm");
//     formData["sunlight"] = sunlightForm.sunlight.value;
  
//     const petsForm = document.getElementById("petsForm");
//     formData["pets"] = petsForm.pets.value;
  
//     const waterForm = document.getElementById("waterForm");
//     formData["water"] = waterForm.water.value;
  
//     const styleForm = document.getElementById("styleForm");
//     formData["style"] = styleForm.style.value;
  
//     const extrasForm = document.getElementById("extrasForm");
//     formData["extras"] = [];
//     const checkboxes = extrasForm.querySelectorAll('input[type="checkbox"]:checked');
//     checkboxes.forEach((checkbox) => formData["extras"].push(checkbox.value));
  
//     return formData;
//   }
  
//   export default getFormData;