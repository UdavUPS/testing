import {validater, inputLimitation, addCurtain, inputNumLimitation} from './functions.js';

const input = document.querySelector('.cards-number');
const but = document.querySelector('.check-but');
let logo = document.querySelectorAll('.cards__card-item');

input.addEventListener("keypress", (evt) => inputLimitation(evt));

input.addEventListener("input", () => addCurtain());



but.addEventListener('click', () => {
    if (inputNumLimitation(input.value)){
        for (let i = 0; i < logo.length; i++) {
            if (logo[i].classList.contains(validater(input.value))){
                logo[i].classList.remove("curtain");
            }
        }
    }
    
});

