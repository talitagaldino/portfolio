import React from 'react';
import './styles.css';
import git from './github.png'
import linkedin from './linkedin.png'
import insta from './insta.png'

const Links = () => {
    return (
        <div className={'caixaLinks'}>

            <a href='https://www.google.com/' target="_blank"> 
                <img className={'links'} src={git}></img>
            </a>

            <a href='https://www.facebook.com/' target="_blank"> 
                <img className={'links'} src={linkedin}></img>   
            </a>
            
            <a href='https://www.instagram.com/' target="_blank"> 
                <img className={'links'} src={insta}></img>    
            </a>

        </div>
    );
}

export default Links;
