import Observer from '../observer.js';

const soilObserver = new Observer();

function setupSoilLogic() {
  const soilRadios = document.querySelectorAll('input[name="soil"]');
  const soilDiv = document.querySelector('.soil');
  const soilSummaryElement = document.getElementById('soil-summary'); // Elemento donde mostrarás el resumen del tipo de suelo

  function getSoilImage(soil) {
    const imagesMap = {
      'composted-soil': './images/soil-composted.png',
      'fertilized-soil': './images/soil-fertilized.png',
      'drainage-soil': './images/soil-drainage.png'
    };
    return imagesMap[soil];
  }

  function addImageToSoilDiv(src, className) {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.className = className;
    soilDiv.appendChild(imageElement);
  }

  function removeImageFromSoilDiv(className) {
    const imageElements = document.getElementsByClassName(className);
    while (imageElements.length > 0) {
      imageElements[0].parentNode.removeChild(imageElements[0]);
    }
  }

  function updateSoilSummary(soil) {
    // Actualiza el contenido del resumen del tipo de suelo
    soilSummaryElement.textContent = `Soil: ${soil}`;
  }

  soilRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        const soil = radio.value;

        const imageSrc = getSoilImage(soil);
        const imageClassName = `soil__image soil-${soil}`;

        removeImageFromSoilDiv(imageClassName);
        addImageToSoilDiv(imageSrc, imageClassName);

        updateSoilSummary(soil); // Actualiza el resumen del tipo de suelo
      }
    });
  });

  soilObserver.subscribe(soil => {
    if (soil) {
      const imageSrc = getSoilImage(soil);
      const imageClassName = `soil__image soil-${soil}`;

      removeImageFromSoilDiv(imageClassName); // Remove existing image with the same className from the soil div
      addImageToSoilDiv(imageSrc, imageClassName);
      updateSoilSummary(soil); // Actualiza el resumen del tipo de suelo
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupSoilLogic();
}); 

export { soilObserver, setupSoilLogic };
