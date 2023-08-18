import Observer from '../publisher.js';

const potMaterialInput = document.querySelector('input[name="pot-material"]');
const potDecorationInput = document.querySelector('input[name="pot-decoration"]');
const potColorToggleInput = document.querySelector('input[name="pots-color"]');
const plantSelect = document.querySelector('.dropdown');
const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');

const observer = new Observer();

potMaterialInput.addEventListener('change', () => {
    const formData = {
        potMaterial: potMaterialInput.value,
        potDecoration: potDecorationInput.value,
        potColorToggle: potColorToggleInput.checked,
        plant: plantSelect.value,
        extras: Array.from(extrasCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value)
    };
    observer.publish(formData);
});

export default observer;

