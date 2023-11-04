import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ navigateTo }) {
    return (
        <div id="menu">
            <Link to="#home" onClick={() => navigateTo('#home')}>
                Home
            </Link>
            <br />
            <Link to="#about" onClick={() => navigateTo('#about')}>
                Sobre nosotros
            </Link>
        </div>
    );
}

export default Menu;
