import React from 'react';
import './styles.css';

import { Container, InternalContainer } from './style.js';

import NavBar from './components/Navbar';
import Descricao from './components/Descricao';
import Links from './components/Links';
import Informacoes from './components/Informacoes';
import Rodape from './components/Rodape';
import Header from './components/Header';

const App = () => (
  <>  
    <Container>
        <NavBar />
      <InternalContainer> 
        <Header />
        <Descricao />
        <Links />
        <Informacoes />
      </InternalContainer>

      <Rodape />
      
    </Container>

  </>

);

export default App;
