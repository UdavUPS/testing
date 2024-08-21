import {validater, inputLimitation} from './functions.js';

const input = document.querySelector('.cards-number');
const but = document.querySelector('.check-but');

input.addEventListener("keypress", (evt) => inputLimitation(evt));

but.addEventListener('click', () => console.log(validater(input.value)));

