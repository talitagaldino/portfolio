import styled from 'styled-components';

export const ExperienceContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 30px;
	padding: 30px 0; 
`;

export const Title = styled.h1`
	color: #8f3d8f;
	margin: 30px 0;
`;

export const Subtitle = styled.h4`
	color: #8f3d8f;
`;

export const Time = styled.h5`
	color: #c8a2c8;
	margin-top: 10px;
	font-weight: 100;
`;


export const Container = styled.div`
	width: 60%;
	text-align: justify;
	margin-top: 30px;
`;

export const List = styled.ul`
	margin-top: 30px;
	margin-left: 50px;
`;

export const Text = styled.text`
	margin-bottom: 10px;
`;

export const Link = styled.a`
	text-decoration: none;
	color: #8f3d8f;

	:hover{
		text-decoration: underline;
		cursor: pointer;
	}
`;