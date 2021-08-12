import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'

import './index.css';

// const saludo = <h1>Hola Mundo!</h1>;
// console.log(saludo);

const divRoot = document.querySelector('#app');
// console.log(divRoot);

// document.body.append(saludo);
// ReactDOM.render(saludo, divRoot);

// ReactDOM.render(<PrimeraApp saludo = 'Hola, soy Goku' />, divRoot);
ReactDOM.render(<CounterApp value = {420} />, divRoot);