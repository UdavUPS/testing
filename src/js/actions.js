import inputLimitation from './functions.js';

const input = document.querySelector('.cards-number');

input.addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});