import styled from 'styled-components';

export const Image = styled.img`
    width: 25%;
    height: 100%;
`;

export const Picture = styled.img`
    margin-bottom: 1rem;
    object-fit: cover;
	width: 35%;
    border-radius: 50%;
`;

export const ImagesContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    height: auto;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    margin-top: 3rem;
`;

export const InformationsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`;

export const H1 = styled.h1`
    border-bottom: 1px solid #ffdb58;
    margin: 1rem 0;
    padding: 1rem;
    text-align: center;
`;

export const H2 = styled.h2`  
    margin: 0 0 1rem 0;
    text-align: center;
`;