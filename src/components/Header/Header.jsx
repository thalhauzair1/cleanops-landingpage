import React, { useState } from "react";
import "./Header.css";
import Button from '@mui/material/Button';
import logo from "../../assets/landingpage-assets/02-Header/Logo-Desktop.svg";
import { HashLink } from 'react-router-hash-link';
import proposalPDF from "../../assets/download/Cleanops-Proposal.pdf";


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

    const handleCloseMenu = () => {
        setMenuOpen(false); // Close the menu when a link is clicked
        document.body.classList.remove('open'); // Remove 'open' class from body
    };

    const downloadFile = () => {
        const anchor = document.createElement('a');
        anchor.href = proposalPDF;
        anchor.download = "Cleanops-Proposal.pdf";
        anchor.click();
    };

    return (
        <div className={`header-content ${menuOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={logo} alt="Cleanops Logo" />
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><HashLink smooth to="#feature-Section" onClick={handleCloseMenu}>Features</HashLink></li>
                    <li><HashLink smooth to="#our-team" onClick={handleCloseMenu}>Our Team</HashLink></li>
                    <li><HashLink smooth to="#contact" onClick={handleCloseMenu}>Contact</HashLink></li>
                </ul>
                <Button
                    variant="contained"
                    onClick={downloadFile}
                    style={{
                        backgroundColor: '#F89C7B',
                        color: 'black',
                    }}
                >
                    Download Proposal
                </Button>
            </nav>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </div>
        </div>
    );
};

export default Header;
