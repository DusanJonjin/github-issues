import React from 'react';
import siteLogo from '../../Images/icon.png';
import './Navbar.css';

export function Navbar() {

    return (
        <nav>
            <div id='logo-with-img'>
                <img src={siteLogo} alt='site-logo' id='logo-img'/>
                GitHub Issues
            </div>
        </nav>
    );
}