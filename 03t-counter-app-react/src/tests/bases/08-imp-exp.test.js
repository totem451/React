import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes ', () => {
    
    test('debe retornar un heroe por id ', () => {
        
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        console.log(heroe);

        expect(heroe).toEqual(heroeData);

    })

    test('debe retornar undefined si no existe el heroe ', () => {
        
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('debe retornar un arreglo con los heroes de DC ', () => {
        
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        console.log(heroes);

        expect(heroes).toEqual(heroesData);

    })
    
    test('debe retornar un arreglo con los heroes de Marvel ', () => {
        
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    })

})
