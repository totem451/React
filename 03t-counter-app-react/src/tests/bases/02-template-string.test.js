import '@testing-library/jest-dom';

import {getSaludo} from '../../bases/02-template-string';

describe('Pruebas en 02-template-string ', () => {
    
    test('getSaludo debe retornar "Hola" + nombre ', () => {
        
        const nombre = 'Tomas';
        
        const saludo = getSaludo(nombre);

        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre + '!');

    })

    test('getSaludo debe retornar "Hola Carlos!" si no hay argumento nombre ', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');

    })
    
    
})
