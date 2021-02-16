import React from 'react';
import { Header, Link, List, ListItem, NavbarContainer } from './style.js';

const Navbar = () => (
    <Header> 
        <NavbarContainer>
            <List>
                <Link href=""> Home</Link>
                <ListItem> • </ListItem>
                <Link href="#about"> About me</Link>
                <ListItem> • </ListItem>
                <Link href="#contato"> Contact</Link>
                <ListItem> • </ListItem>
                <Link href="#skills"> Skills</Link>
                <ListItem> • </ListItem>
                <Link href="#experience"> Experience</Link>
            </List>
        </NavbarContainer>
    </Header>

);

export default Navbar;