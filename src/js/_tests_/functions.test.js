/**
 * @jest-environment jsdom
 */

/* import { validater, inputLimitation, addCurtain,  inputNumLimitation} from '../functions'; */
import  {inputNumLimitation} from '../functions';


test ('Test of function of number length', () => {
    let res1 = inputNumLimitation('4916283256211951');
    let res2 = inputNumLimitation('491628325621195123');
    let res3 = inputNumLimitation('49162832562');

    /*window.alert = jest.fn(res2);
    /* console.log(res2); */
    /*inputNumLimitation('491628325621195123');
    jest.spyOn(window, 'alert').mockImplementation((e) => {console.log(e)});
    /* expect(qwe).toBe('Вы ввели лишние цифры'); */


    expect(res1).toEqual(true);
    expect(res2).toBe(false);
    expect(res3).toBe(false);

})