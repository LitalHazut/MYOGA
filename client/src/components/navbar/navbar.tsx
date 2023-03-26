import React from 'react';
import './navbar.css'
export const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <h4>MYOGA</h4>

                <div>
                    <ul className='horizontal-list'>
                        <li>
                            <a href='/Contact' className='nav-link'>Contact</a>
                        </li>
                        <li>
                            <a href='/MyLessons' className='nav-link'>My lessons</a>
                        </li>
                        <li>
                            <a href='/Workshops' className='nav-link'>Workshops</a>
                        </li>
                        <li>
                            <a href='/Login' className='nav-link'>Login</a>
                        </li>
                        <li>
                            <a href='/Gallery' className='nav-link'>Gallery</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}