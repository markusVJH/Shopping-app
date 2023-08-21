import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/" activeClassname="active">Home</NavLink></li>
                <li><NavLink to="/products" activeClassname="active">Products</NavLink></li>
                <li><NavLink to="/test" activeClassname="active">Test</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;