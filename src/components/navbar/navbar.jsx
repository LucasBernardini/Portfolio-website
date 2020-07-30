import React from 'react';
import "./navbar.scss";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar__heading">Lucas Bernardini</h1>
            <ul className="navbar__menu">
                <li className="navbar__menu--item">Home</li>
                <li className="navbar__menu--item">Projects</li>
                <li className="navbar__menu--item">Contact</li>
            </ul>
        </div>
    )
}
