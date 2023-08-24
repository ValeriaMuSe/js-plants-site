
export function setupColorToggle() {
    const colorToggleYes = document.getElementById('color-toggle-yes');
    const colorToggleNo = document.getElementById('color-toggle-no');
    const colorOptions = document.querySelector('.color-options');

    colorToggleYes.addEventListener('change', () => {
        colorOptions.style.display = 'block';
    });

    colorToggleNo.addEventListener('change', () => {
        colorOptions.style.display = 'none';
    });
}
