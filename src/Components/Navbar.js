import React from 'react';
import innova from '../Images/innova.svg'
import './Nav.css'

export default function NavBar() {
    return <nav className="nav">
        <ul>
            <li>
                <a href='/home'>Home</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/product'>Product</a>
            </li>
            <li>
                <a href='/team'>Team</a>
            </li>
            <li>
                <a href='/contact'>Contact</a>
            </li>

        </ul>
    </nav>
}