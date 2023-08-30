import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" activeClassName="active" className="nav-link">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;