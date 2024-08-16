import React, { useState } from 'react';
import galapago_logo from '../resources/galapago_logo.svg';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navBar").style.top = "0";
        } else {
            document.getElementById("navBar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div id='navBar'>
                <a href='/'>
                    <img alt='Galapago logo' src={galapago_logo} style={{ width: '10rem', display: 'block', margin:'1rem 0' }} />
                </a>
                <div className={`pagesIndex ${menuOpen ? 'open' : ''}`}>
                    <a href='/about'>NOSOTROS</a>
                    <a href='/services'>SERVICIOS</a>
                    <a href='/contact'>CONTACTO</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
