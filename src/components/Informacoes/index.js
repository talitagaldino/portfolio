import React from 'react'; 
import './styles.css';

const Informacoes = () =>{
    return(
        <div>
            <h1 className={'subtitulo'}> About </h1>
                <h1 className={'textoInformacoes'}>  
                    My name is Talita Galdino, from Campina Grande, Brazil. I am a Computer Science undergraduate at Federal University of Campina Grande
                    and I am currently in the fifth period.
                </h1>
                <h1 className={'textoInformacoes'}>
                    I worked as a discipline monitor for programming language paradigms for a period.
                </h1>
                <h1 className={'textoInformacoes'}>
                    For three months I worked on the 
                    <a className={'wywus'} href={'https://www.facebook.com/ProjetoWyWus'} target="_blank"> Wywus </a>
                    project in the development of an application.
                </h1>
                <h1 className={'textoInformacoes'}>
                    I am interested in working with data analysis and learning even more about web development.
                </h1>

        </div>
    );
}

export default Informacoes;