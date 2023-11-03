import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
    navigateTo: (route: string) => void;
}

function Menu({ navigateTo }: MenuProps) {
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
