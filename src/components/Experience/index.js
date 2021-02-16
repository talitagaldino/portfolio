import React from 'react';
import { ExperienceContainer, Time, Text, List, Link, Title, Subtitle, Container } from './style'; 

const Experience = () =>{
	return(
		<ExperienceContainer id='experience'>
				<Title> Experience </Title>
				<Container>
					<div>
						<Subtitle> Software Development Intern @ Incodde </Subtitle>
						<br />
						<Text>
						I have worked in several web development projects in the company's own products and also for third parties
						My contribution has been mostly related to front-end development, using technologies as React.js and Vue.js, but I also had contact with back-end using Node.js.
						</Text>
						<List>
							<li> React component development </li>
							<li> Pages development</li>
							<li> Integration with backend </li>
							<li> Code review </li>
						</List>
						<br />
						<Text>
							Technologies: React, Vue.js, Node.js, Git, MySQL, Postman, Docker
						</Text>
						<Time> May 2020 - at the moment</Time>
					</div>
				</Container>

				<Container>
					<div>
						<Subtitle> Software Development Volunteer </Subtitle>
						<br />
						<Text>
							I worked for 4 months as a volunteer developer at 
							<Link href='https://www.facebook.com/ProjetoWyWus'> WYWUS </Link>
							research and development project in a laboratory at the Federal University of Campina Grande (UFCG), guided by professor Ulrich Schiel.
						</Text>
						<br />
						<Text>
							The objective of the project was to contribute to the development of the SEI-Com and SEI-Saúde platforms. Both were collaborative to encourage healthy practices and personal financial management integrated with an application called WyWus.						</Text>
						<br />
						<Text>
						During the development of the activities I had the opportunity to work with modeling and handling of relational databases (MySQL), back-end with Node.js and front-end in React.						</Text>
						<List>
							<li> SEI-Saúde database modeling </li>
							<li> Development of SEI-Saúde back-end</li>
							<li> Front-end adjustments </li>
							<li> Code review </li>
						</List>
						<br />
						<Text>
							Technologies: Node.js, React, MySQL, Git
						</Text>
						<Time> January 2020 - April 2020 </Time>
					</div>
				</Container>

				<Container>
					<div>
						<Subtitle> Monitoring Volunteer</Subtitle>
						<br />
						<Text>
							I worked as a monitor in the discipline of Programming Language Paradigms for a semester.
							My assignments were:
						</Text>
						<List>
							<li> Monitoring of disciplines projects </li>
							<li> Support during class with questions and exercises</li>
							<li> Aid to students of the discipline in languages: C ++, Haskell and Prolog </li>
						</List>
						<br />
						<Time> August 2019 - December 2019</Time>
					</div>
				</Container>
		</ExperienceContainer>
);
}

export default Experience;