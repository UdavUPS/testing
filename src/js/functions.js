let logo = document.querySelectorAll('.cards__card-item');
export function inputLimitation(evt) {
    if (evt.which < 48 || evt.which > 57)
        {
            evt.preventDefault();
        }
    }

export function validater(evt) {
    let mas = evt.split('');

        if (mas[0] == 4) {return 'Visa'};
        if (mas[0] == 5) {
            if (mas[1]>0 && mas[1]<6) {return 'MasterCard';}
        };
        if (mas[0] == 2) {return 'Mir'};
}

export function addCurtain() {
    for (const elm of logo) {
        if (!elm.classList.contains('curtain')) {
            elm.classList.add('curtain');
        }
    }
}

export function inputNumLimitation(evt) {
    let mas = evt.split('');
    if (mas.length < 16) {
        alert('Вы ввели номер не полностью');
        return false;
    } else if (mas.length > 16) {
        alert('Вы ввели лишние цифры');
        return false;
    } else {
        return true;
    }
}