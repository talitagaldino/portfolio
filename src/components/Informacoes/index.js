import React from 'react'; 
import './styles.css';

const Informacoes = () =>{
    return(
        <div id="informacoes">
            <h1 className={'subtitulo'}> About </h1>
                <h1 className={'textoInformacoes'}>  
                    My name is Talita Galdino and I'm from Campina Grande, Brazil. I'm an undergraduate student
                    of Computer Science at the Federal University of Campina Grande, with the graduation expected for 2022.
                </h1>
                <h1 className={'textoInformacoes'}>
                    I worked as teacher assistant for the topic of Programming Language Paradigms.
                </h1>
                <h1 className={'textoInformacoes'}>
                    For three months I worked for the 
                    <a className={'wywus'} href={'https://www.facebook.com/ProjetoWyWus'} target="_blank"> Wywus </a>
                    project in the development of web applications.
                </h1>
                <h1 className={'textoInformacoes'}>
                    Besides my interest in Web Development, I am an enthusiast of Data Analysis relate areas.
                </h1>

        </div>
    );
}

export default Informacoes;