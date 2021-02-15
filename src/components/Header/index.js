import React from 'react';
import { Image, Picture, ImagesContainer, HeaderContainer } from './style.js';
import woman1 from '../../assets/woman1.jpg';
import woman2 from '../../assets/woman2.jpg';
import picture from '../../assets/talita.png';

const Header = () => {
    return(

        <HeaderContainer>
            <ImagesContainer>
                <Image src={woman1} />
                <Picture src={picture} />
                <Image src={woman2} />
            </ImagesContainer>

        </HeaderContainer>    
    );
};

export default Header;