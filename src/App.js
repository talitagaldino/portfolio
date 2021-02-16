import React from 'react';
import './styles.css';

import { Container, InternalContainer } from './style.js';

import NavBar from './components/Navbar';
import Links from './components/Links';
import About from './components/About';
import Rodape from './components/Rodape';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';

const App = () => (
  <>  
    <Container>
        <NavBar />
      <InternalContainer> 
        <Header />
        <About />
        <Skills />
        <Experience />
        <Links />
      </InternalContainer>

      <Rodape />
      
    </Container>

  </>

);

export default App;
