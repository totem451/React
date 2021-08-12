import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 100 } ) => {

    // const state = useState('Goku');
    // console.log(state);

    // const [nombre, setNombre] = useState('Goku');
    // console.log(nombre, setNombre);

    const [counter, setCounter] = useState( value ); //[]

    //handleAdd
    const handleAdd = (/*e*/) => {

        // console.log(e)

        // return () => console.log('+1');

        setCounter( counter + 1 );

        // setCounter( (counter) => counter + 1 )
    }

    const handleSubstract = () => {

        setCounter( counter - 1 );

    }

    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>Counter App</h1>
            {/* <h2> { value } </h2> */}
            <h2> { counter } </h2>
            <button onClick = { /*handleAdd()*/ handleAdd /*() => { console.log('+1') }*/ }>+1</button>
            <button onClick = { handleReset }>reset</button>
            <button onClick = { handleSubstract }>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;