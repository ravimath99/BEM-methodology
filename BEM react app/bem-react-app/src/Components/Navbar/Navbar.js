import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">Home</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">Tab 2</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">Tab 3</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
        
    );
}

export default Navbar;
