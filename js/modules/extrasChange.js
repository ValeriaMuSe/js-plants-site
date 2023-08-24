import Observer from '../observer.js';

const extrasObserver = new Observer();

function setupExtrasLogic() {
  const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
  const extrasDiv = document.querySelector('.extras');

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

        removeImageFromExtrasDiv(imageClassName); // remove existing image with the same className
        addImageToExtrasDiv(imageSrc, imageClassName);
      }
    });
  });

  extrasObserver.subscribe(extra => {
    if (extra) {
      const imageSrc = getExtraImage(extra);
      const imageClassName = `extra__image extra-${extra}`;
  
      removeImageFromExtrasDiv(imageClassName); // remove existing image with the same className
      addImageToExtrasDiv(imageSrc, imageClassName);
    }
  });  
}

export { extrasObserver, setupExtrasLogic };