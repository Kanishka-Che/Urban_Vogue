import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import NavImg from '../../assets/Untitled.png';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={NavImg} alt="Logo" className="nav-img" />
        <h1 className="logo-text">Urban Vogue</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link" activeClassName="active-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link login-link">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
