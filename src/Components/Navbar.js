import React from 'react';
import innova from '../Images/innova.svg'
import './Nav.css'

export default function NavBar() {
    return <nav className="nav">
        <ul>
            <CustomLink href='/home'>Home</CustomLink>
            <a href='#about'>About</a>
            <CustomLink href='/product'>Product</CustomLink>
            <CustomLink href='/team'>Team</CustomLink>
            <CustomLink href='/contact'>Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    );
}