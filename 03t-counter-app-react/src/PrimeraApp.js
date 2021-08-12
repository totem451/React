// FC = Functional Components

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( /*props*/ { saludo, subtitulo } /*{ saludo = 'Hola Mundo' }*/ ) => {

    // const saludo = 'Hola Mundo!';

    console.log( /*props*/ saludo );

    const objeto = {
        nombre: 'Tomas',
        edad: 20
    }

    // if ( !saludo ) {
    //     throw new Error( 'El saludo es necesario' );
    // }

    return (

        // <div>
        //     <h1>Hola Mundo!</h1>
        //     <p>Mi Primera Aplicacion</p>
        // </div>

        // <Fragment>
        //     <h1>Hola Mundo!</h1>
        //     <p>Mi Primera Aplicacion</p>
        // </Fragment>

        <>
            <h1> { saludo } </h1>
            <pre> { JSON.stringify( objeto, null, 3 ) } </pre>
            {/* <p>Mi Primera Aplicacion</p> */}
            <p> { subtitulo } </p>
        </>

    );

}

// te exige que exista saludo y que sea un string
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// PrimeraApp.defaultProps = {
//     subtitulo: 'Soy un subtitulo',
//     saludo: 'Hola Mundo'
// }

export default PrimeraApp;