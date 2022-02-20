import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

import './index.css';
import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#app');

ReactDOM.render( <PrimeraApp saludo="Hola, soy Goku" /> , divRoot );

