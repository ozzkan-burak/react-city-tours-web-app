import React from 'react';
import "./NavBar.scss";
import Logo from "../../logo.png"

export default function NavBar(props) {
    return (
        <nav className="navbar">
            <img src={Logo} alt={props.Alt} />
            <ul className="nav-links">
               <li>
                   <a href="/" className="nav-link">Anasayfa</a>
               </li>
               <li>
                   <a href="/" className="nav-link">Özet</a>
               </li>
               <li>
                   <a href="/" className="nav-link active">Turlar</a>
               </li>
            </ul>
        </nav>
    )
}
