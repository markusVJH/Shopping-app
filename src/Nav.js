import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Nav = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container">
                <NavLink to="/" activeClassName="active" className="navbar-brand">
                    <img src={logo} alt="Logo" style={{ transform: 'scale(0.5)' }} />
                </NavLink>
                <ul className="navbar-nav">
                    <li>
                        <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active" className="nav-link">Products</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
