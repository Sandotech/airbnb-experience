import React from 'react';
import NavbarLogo from '../assets/Vector.png';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <img src={NavbarLogo} alt="Airbnb" className='nav--logo'/>
        </nav>
    );
}

export default Navbar;