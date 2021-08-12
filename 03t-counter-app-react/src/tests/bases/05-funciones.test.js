import '@testing-library/jest-dom'

import {getUser, getUsuarioActivo} from '../../bases/05-funciones'

describe('Pruebas en 05-funciones ', () => {
    
    test('getUser debe retornar un objeto ', () => {
        
        const userTest = {

            // uid: 'p123',
            // username: 'Pepe1234'

            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        console.log(user);

        expect(user).toEqual(userTest);

    })

    test('getUsuarioActivo debe retornar un objeto ', () => {
        
        const nombre = 'Tomas';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        console.log(user);

        expect(user).toEqual(userTest);

    })
    
    
})
