import React from 'react';
import './styles.css';

import { Container, InternalContainer } from './style.js';

import NavBar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => (
  <>  
    <Container>
        <NavBar />
      <InternalContainer> 
        <Header />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </InternalContainer>

      <Footer />
      
    </Container>

  </>

);

export default App;
