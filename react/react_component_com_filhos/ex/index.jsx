import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName='Rocambole Gordinho'>
        <Member name='Morango' />
        <Member name='Chocolate' />
        <Member name='Caramelo' />
    </Family>    
, document.getElementById('app'));