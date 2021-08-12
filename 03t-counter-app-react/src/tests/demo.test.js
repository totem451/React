// console.log('Hola Mundo');

describe('Prubas en el archivo demo ', () => {
    
    test('debe ser true ', () => {
    
        const isActive = true;
    
        if (!isActive) {
    
            throw new Error('No esta activo ')
    
        }
    
        // if (isActive) {
    
        //     throw new Error('No esta activo ')
            
        // }
    
    })
    
    test('deben ser iguales los strings', () => {
        
        // inicializacion
        const mensaje1 = 'Hola Mundo';
    
        // estimulo
        const mensaje2 = "Hola Mundo";
    
        // observar el comportamiento
        expect(mensaje1).toBe(mensaje2); // ===
    })
    
});