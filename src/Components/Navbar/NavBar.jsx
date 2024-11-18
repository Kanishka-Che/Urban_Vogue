import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
        <li><NavLink to="/services" activeClassName="active-link">Services</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
        <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
