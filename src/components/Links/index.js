import React from 'react';
import './styles.css';
import foto from './talita.png'
import fota from './tali3.png'
import fotos from './lita.jpg'

const Links = () => {
    return (
        <div className={'caixaLinks'}>

            <a href='https://www.google.com/' target="_blank"> 
                <img className={'links'} src={foto}></img>
            </a>

            <a href='https://www.google.com/' target="_blank"> 
                <img className={'links'} src={fotos}></img>    
            </a>
            
            <a href='https://www.google.com/' target="_blank"> 
                <img className={'links'} src={fota}></img>    
            </a>

        </div>
    );
}

export default Links;
