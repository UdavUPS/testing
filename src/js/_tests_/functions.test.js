/* import { validater, inputLimitation, addCurtain,  inputNumLimitation} from '../functions'; */
import  inputNumLimitation from '../functions';
/* const { inputNumLimitation } = require('../functions'); */

test ('Test of function of number length', () => {
    let res1 = inputNumLimitation('4916283256211951');
/*     let res2 = inputNumLimitation('491628325621195123');
    let res3 = inputNumLimitation('49162832562'); */

    /* let res1 = true; */

    expect(res1).toEqual(true);
/*     expect(res2).toBe(false);
    expect(res3).toBe(false); */

/*     let res1 = 'qw';

    expect(res1).toBe('qw'); */

})