import React from 'react'; 
import { AboutContainer, Title, TextContainer } from './style.js';

const About = () =>{
    return(
        <AboutContainer id='about'>
            <Title> About TALI </Title>
            <TextContainer>
                My name is Talita Galdino, I'm 24 years old and I'm from Campina Grande, Brazil. I'm an undergraduate student
                of Computer Science at the Federal University of Campina Grande, with the graduation expected for 2022.
                Professionally I am always looking for more learning opportunities and willing to face new challenges.
                Besides my interest in Web Development, I am an enthusiast of Data Analysis relate areas.
            </TextContainer>
        </AboutContainer>
    );
}

export default About;