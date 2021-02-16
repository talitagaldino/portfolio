import React from 'react';
import { H1, H2, Image, Picture, ImagesContainer, HeaderContainer, InformationsContainer } from './style.js';
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
            <InformationsContainer>
                <H1> Talita Galdino </H1>
                <H2> Computer science student </H2>
                <H2> Future software engineer always trying to learn </H2>
            </InformationsContainer>

        </HeaderContainer>    
    );
};

export default Header;