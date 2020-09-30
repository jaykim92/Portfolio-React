import React from 'react';

function Header() {
    return(
        <header>
            <nav className='navbar navbar-expand bg-light sticky-nav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'><span className='text-dark'>Home</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/about'><span className='text-dark'>About</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/projects'><span className='text-dark'>Projects</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/contact'><span className='text-dark'>Contact</span></a>
                    </li>
                </ul>
            </nav>            
        </header>
    );
};

export default Header;