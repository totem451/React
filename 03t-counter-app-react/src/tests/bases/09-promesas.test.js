import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas ', () => {
    
    test('debe retornar un heroe async ', (done) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBe(heroes[id - 1]);
                done();

            })
    })

    test('debe dar error si el heroe por id no existe ', (done) => {
    
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el heroe ');
                done();

            })
    })
    
})
