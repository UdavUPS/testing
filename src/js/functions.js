
export function inputLimitation(evt) {
    if (evt.which < 48 || evt.which > 57)
        {
            evt.preventDefault();
        }
    }

export function validater(evt) {
    let mas = evt.split('');

    if (mas.length == 14) {
        /* console.log(mas); */
        if (mas[0] == 4) {return 'Visa'};
        if (mas[0] == 5) {
            if (mas[1]>0 && mas[1]<6) {return 'MasterCard';}
        };
        if (mas[0] == 2) {return 'Mir'};
    } else if (mas.length < 14) {
        console.log('Вы ввели номер не полностью');
    } else if (mas.length > 14) {
        console.log('Вы ввели лишние цифры');
    }
}
