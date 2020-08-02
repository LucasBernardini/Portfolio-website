import React from 'react';
import "./navbar.scss";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar__heading"><a href="/">Lucas Bernardini</a></h1>
            <ul className="navbar__menu">
            <a className="navbar__menu--item" href="/">Home</a>
            <a className="navbar__menu--item" href="#projects">Projects</a>
            <a className="navbar__menu--item" href="#contact">Contact</a>
            </ul>
        </div>
    )
}
