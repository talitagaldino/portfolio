import styled from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 30px;
	padding: 30px 0
`;

export const Title = styled.h1`
	color: #ffdb58;
	margin: 30px 0;
`;

export const H6 = styled.h6`
	font-size: 15px;
	font-weight: 100;
	margin-top: 5px;
	margin-left: 10px;
`;

export const Container = styled.div`
`;

export const Link = styled.a`
	text-decoration: none;
	font-size: 15px;
	font-weight: 100;
	margin-top: 5px;
	margin-left: 10px;
	
	:hover{
		color: #ffdb58;
		text-decoration: underline;
		cursor: pointer;
	}
`;

export const InformationContainer = styled.div`
	display: flex;
`;