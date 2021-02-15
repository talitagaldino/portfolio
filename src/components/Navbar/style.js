import styled from 'styled-components';

export const Header = styled.header``;

export const NavbarContainer = styled.nav`
    width: 100%;
    position: fixed;
    background-color: white;
    padding: 1rem 2.5rem;
    height: 6rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
`;

export const List = styled.ul`
    display: inline;
    margin-top: 1.5rem;
`;

export const ListItem = styled.li`
    display: inline;
`;

export const Link = styled.a`
    list-style-type: none;
    display: inline;
    text-decoration: none;
    color:#007bff;

    :hover{
        text-decoration: underline;
        color: #003983; 
    }
`;