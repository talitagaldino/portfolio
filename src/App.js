import React from 'react';
import './styles.css';
import foto from './talita.png';
import Titulo from './components/Titulo/index';
import Descricao from './components/Descricao';
import Links from './components/Links';

const App = () => (
  <div>  
    <div className={'caixaExterna'}>
      <div className={'caixaInterna'}> 
        <img src={foto} className={'imagem'}></img>
    
        <Titulo />
        <Descricao />
        <Links />
      </div>

      

    </div>

  </div>

);

export default App;
