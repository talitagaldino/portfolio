import React from 'react';
import './styles.css';
import foto from './talita.png';

import NavBar from './components/Navbar';
import Titulo from './components/Titulo/index';
import Descricao from './components/Descricao';
import Links from './components/Links';
import Informacoes from './components/Informacoes';
import Rodape from './components/Rodape';

const App = () => (
  <div>  
    <div className={'caixaExterna'}>
        <NavBar />
      <div className={'caixaInterna'}> 
        <img src={foto} className={'imagem'}></img>
        <Titulo />
        <Descricao />
        <Links />
        <Informacoes />
      </div>

      <Rodape />
      
    </div>

  </div>

);

export default App;
