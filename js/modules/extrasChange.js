import Observer from '../observer.js';

const extrasObserver = new Observer();

function setupExtrasLogic() {
  const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
  const extrasDiv = document.querySelector('.extras');
  const extrasSummaryElement = document.getElementById('extras-summary');

  const selectedExtras = [];

  function updateExtrasSummary() {
    const extrasSummary = `Extras: ${selectedExtras.join(', ')}`;
    extrasSummaryElement.textContent = extrasSummary;
  }

  function getExtraImage(extra) {
    const imagesMap = {
      'moss-pole': './images/moss-pole.png',
      'pebbles': './images/pebbles.png',
      'mini-plants': './images/mini-plants.png'
    };
    return imagesMap[extra];
  }

  function addImageToExtrasDiv(src, className) {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.className = className;
    extrasDiv.appendChild(imageElement);
  }

  function removeImageFromExtrasDiv(className) {
    const imageElements = document.getElementsByClassName(className);
    while (imageElements.length > 0) {
      imageElements[0].parentNode.removeChild(imageElements[0]);
    }
  }   

  extrasCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        const extra = checkbox.value;

        const imageSrc = getExtraImage(extra);
        const imageClassName = `extra__image extra-${extra}`;

        removeImageFromExtrasDiv(imageClassName);
        addImageToExtrasDiv(imageSrc, imageClassName);

        selectedExtras.push(extra);
      } else {
        const extraIndex = selectedExtras.indexOf(checkbox.value);
        if (extraIndex !== -1) {
          selectedExtras.splice(extraIndex, 1);
        }
      }
      
      updateExtrasSummary();
    });
  });

  extrasObserver.subscribe(extra => {
    if (extra) {
      selectedExtras.push(extra);
      updateExtrasSummary();
    }
  });
}

export { extrasObserver, setupExtrasLogic };