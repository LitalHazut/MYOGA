import React from 'react';
import './navbar.css'
export const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <h3 className='studioName'>MYOGA</h3>

                <div>
                    <ul className='horizontal-list'>
                        <li>
                            <a href='/Main' className='nav-link'>About</a>
                        </li>
                        <li>
                            <a href='/MyLessons' className='nav-link'>My lessons</a>
                        </li>
                        <li>
                            <a href='/Workshops' className='nav-link'>Workshops</a>
                        </li>
                        <li>
                            <a href='/Gallery' className='nav-link'>Gallery</a>
                        </li>
                        <li>
                            <a href='/Contact' className='nav-link'>Contact</a>
                        </li>
                        <li>
                            <a href='/Login' className='nav-link'>Login</a>

                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}