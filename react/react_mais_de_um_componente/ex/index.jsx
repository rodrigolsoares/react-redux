import React from 'react';
import ReactDOM from 'react-dom';
//Exemplo 1
import Primeiro, { Segundo} from './component';

//Exemplo 2
//import {Primeiro, Segundo} from './component';

ReactDOM.render(
    
    <div>
        <Primeiro />
        <Segundo />
    </div>
    
, document.getElementById('app'));