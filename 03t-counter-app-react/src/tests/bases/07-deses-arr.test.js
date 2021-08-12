import '@testing-library/jest-dom'

import { retornaArreglo } from '../../bases/07-deses-arr'

describe('Pruebas en desestructuracion ', () => {
    
    test('retornaArreglo debe retornar un arreglo con un string y un numero ', () => {
        
        // const arr = retornaArreglo() // ['ABC', 123]
        
        // expect(arr).toEqual(['ABC', 123]);

        const [letras, numeros] = retornaArreglo();

        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');
        
        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');

    })
    
})
