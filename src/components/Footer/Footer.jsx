import React from 'react';
import './Footer.css';
import logo from '../../assets/landingpage-assets/02-Header/Footer-Logo.svg'

const Footer = () =>{
return(
<div className='footerStyle'>
<div className='footerContent'>
    <img src={logo} alt="logo" className="footer-logo"/>
    <h4> 
    © Cleanops 2024
    </h4>
    </div>
</div>)

}

export default Footer;