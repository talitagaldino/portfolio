import React from 'react'; 
import { ContactContainer, H6, Title, Container, InformationContainer, Link } from './style';

import { AiOutlineMail, AiOutlinePhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () =>{
    return(
			<ContactContainer id='contact'>
				<Title> Contact </Title>
				<Container>
					<InformationContainer>
						<AiOutlineMail color='#ffdb58' size={30}/>
						<H6> talita.gouveia@ccc.ufcg.edu.br </H6>
					</InformationContainer>

					<InformationContainer>
						<AiOutlinePhone size={30} color='#ffdb58'/>
						<H6> (83) 9 96478670 </H6>
					</InformationContainer>

					<InformationContainer>
						<AiFillGithub size={30} color='#ffdb58'/>
						<Link> Github </Link>
					</InformationContainer>

					<InformationContainer>
						<AiFillLinkedin size={30} color='#ffdb58'/>
						<Link> Linkedin </Link>
					</InformationContainer>
				</Container>
			</ContactContainer>
    );
}

export default Contact;