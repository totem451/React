


const nombre   = 'Tomas';
const apellido = 'Ledesma';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


// function getSaludo(nombre) {
//     return 'Hola ' + nombre;
// }

export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );