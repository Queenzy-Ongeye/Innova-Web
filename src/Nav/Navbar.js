import React from 'react';
import './Nav.css'

const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <li><a class="a1" href="#id-home">Home</a></li>
                <li><a class="a1" href="#about">About</a></li>
                <li><a class="a1" href="#work">Product</a></li>
                <li><a class="a1" href="#team">Team</a></li>
            </ul>
        </div>
    )
}
export default Navbar;

// export default function NavBar() {
//     return <nav className="nav">
//         <ul>
//             <CustomLink href='/home'>Home</CustomLink>
//             <a href='#about'>About</a>
//             <CustomLink href='/product'>Product</CustomLink>
//             <CustomLink href='/team'>Team</CustomLink>
//             <CustomLink href='/contact'>Contact</CustomLink>
//         </ul>
//     </nav>
// }

// function CustomLink({ href, children, ...props }) {
//     const path = window.location.pathname
//     return (
//         <li className={path === href ? "active" : ""}>
//             <a href={href} {...props}>{children}</a>
//         </li>
//     );
// }