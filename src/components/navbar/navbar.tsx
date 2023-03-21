import React from 'react';
import './navbar.css'
export const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <a >MYOGA</a>

                <div>
                    <ul className='horizontal-list'>
                        <li>
                            <a href='/Home' className='nav-link'>Home</a>
                        </li>
                        <li>
                            <a href='/About' className='nav-link'>About</a>
                        </li>
                        <li>
                            <a href='/MyLessons' className='nav-link'>My lessons</a>
                        </li>
                        <li>
                            <a href='/Workshops' className='nav-link'>Workshops</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}