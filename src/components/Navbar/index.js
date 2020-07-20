import React from 'react';
import './styles.css';

const Navbar = () => (
    <header> 
        <nav className="navbarContainer">
            <ul className="linksNavbar">
                <a href=""> Home</a>
                <li> • </li>
                <a href="#informacoes"> About me</a>
                <li> • </li>
                <a href="#contato"> Contact</a>
                <li> • </li>
                <a href="#skills"> Skills</a>
                <li> • </li>
                <a href="#experience"> Experience</a>
            </ul>
        </nav>
    </header>

);

export default Navbar;