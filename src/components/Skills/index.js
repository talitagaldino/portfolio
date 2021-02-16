import React from 'react'; 
import { Subtitle, List, ListContainer, Title, Container, SkillsContainer } from './style';

const Skills = () =>{
    return(
			<SkillsContainer id="skills">
					<Title> Skills </Title>
					<Container>
						<ListContainer>
							<Subtitle> Professional skills</Subtitle>
								<List>
									<li> Javascript </li>
									<li> Java </li>
									<li> Git </li>
									<li> React.js </li>
									<li> Node.js </li>
									<li> Vue.js </li>
									<li> HTML </li>
									<li> CSS </li>
									<li> C++ </li>
									<li> MySQL </li>
									<li> Python </li>
								</List>
						</ListContainer>
						
						<ListContainer>
							<Subtitle> Personal skills </Subtitle>
								<List>
									<li> Communicative </li>
									<li> Organized </li>
									<li> Motivated </li>
									<li> Creative </li>
									<li> Responsible </li>
									<li> Ease for group work </li>
								</List>
						</ListContainer>
					</Container>
						
					
			</SkillsContainer>
    );
}

export default Skills;