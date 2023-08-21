import Observer from '../publisher.js';

const observer = new Observer();

const extraImages = {
  'moss-pole': './images/moss-pole.png',
  'pebbles': './images/pebbles.png',
  'mini-plants': './images/mini-plants.png'
};

const extrasForm = document.getElementById('extrasForm');
const checkboxes = extrasForm.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkboxItem => {
  checkboxItem.addEventListener('change', () => {
    const selectedExtras = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    observer.publish(selectedExtras);
  });
});

class ExtrasObserver {
  constructor() {
    this.extrasImagesHtml = '';
  }

  update(selectedExtras) {
    this.extrasImagesHtml = selectedExtras
      .map(extra => `<img class="extra__image extra-${extra}" src="${extraImages[extra]}" alt="" />`)
      .join('');

    this.updateHTML();
  }

  updateHTML() {
    const extrasDiv = document.querySelector('.extras');
    extrasDiv.innerHTML = this.extrasImagesHtml;
  }
}

const extrasObserver = new ExtrasObserver();

observer.subscribe(extrasObserver); // Subscribe the ExtrasObserver to the Observer

export default observer;