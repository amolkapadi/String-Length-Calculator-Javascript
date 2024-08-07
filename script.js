// script.js
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const lengthDisplay = document.getElementById('length');

    inputField.addEventListener('input', () => {
        const length = inputField.value.length;
        lengthDisplay.textContent = length;
    });
});
