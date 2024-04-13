// Header.js
import React, { useState } from "react";
import "./Header.css";
import Button from '@mui/material/Button';
import logo from "../../assets/landingpage-assets/02-Header/Logo-Desktop.svg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            document.body.classList.remove('open');
        } else {
            document.body.classList.add('open');
        }
    };

    return (
        <div className={`header-content ${menuOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={logo} alt="Cleanops Logo" />
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#our-team">Our Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <Button variant="contained" style={{
                    backgroundColor: '#F89C7B',
                    color: 'black',
                }}>Download Proposal</Button>
            </nav>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </div>
        </div>
    );
    
}

export default Header;
