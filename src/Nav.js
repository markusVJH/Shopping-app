import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="header">
            <p className='logo'><NavLink to="/">Shopping App</NavLink></p>
        <nav className="nav">
            <ul>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/products" activeclassname="active">Products</NavLink></li>
                <li><NavLink to="/test" activeclassname="active">Test</NavLink></li>
            </ul>
        </nav>
        </div>
    );
};

export default Nav;