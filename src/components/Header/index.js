import React from 'react';
import './styles.css';
import foto from './desenho.png';

const Header = () => {
    return(

        <div className="container">
            <section id="home">
                <div className="container_conjunto">
                    <div className="container_imagem">
                        <img src={foto} className="desenho"/>
                    </div>
                    <div className="container_titulo">
                        <h2> Talita Galdino </h2>
                        <h1> Computer science student </h1>
                    </div>
                    <div className="container_links">
                        <h1> teste links </h1>
                    </div>
                </div> 
            </section>
        </div>
    
    );
};

export default Header;