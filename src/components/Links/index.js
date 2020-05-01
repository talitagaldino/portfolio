import React from 'react';
import './styles.css';
import git from './github.png'
import linkedin from './linkedin.png'
import insta from './insta.png'

const Links = () => {
    return (
        <div className={'caixaLinks'}>

            <a href='https://github.com/talitagaldino' target="_blank"> 
                <img className={'links'} src={git}></img>
            </a>

            <a href='https://www.linkedin.com/in/talita-galdino-1808101a7/' target="_blank"> 
                <img className={'links'} src={linkedin}></img>   
            </a>
            
            <a href='https://www.instagram.com/talita_galdino' target="_blank"> 
                <img className={'links'} src={insta}></img>    
            </a>

        </div>
    );
}

export default Links;
