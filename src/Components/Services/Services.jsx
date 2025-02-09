import React from 'react';
import './Services.css';
import { NavLink } from 'react-router-dom';
import NavImg from '../../assets/Untitled.png';

const Services = () => {
    return (
      <div>
          {/* Navigation Bar */}
          <nav className="navBar">
              <img src={NavImg} alt="Logo" className="navLogo" />
              <ul className="navLinks">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/About">About Us</NavLink></li>
                  <li><NavLink to="/Services">Services/Products</NavLink></li>
                  <li><NavLink to="/Contact">Contact Us</NavLink></li>
                  <li><NavLink to="/login"><button className="buttonNav">Login</button></NavLink></li>
              </ul>
          </nav>

          {/* Services Section */}
          <div className="servicesContainer">
              <h1>Our Services</h1>
              <div className="serviceCards">
                  <div className="serviceCard">
                      <h2>Web Development</h2>
                      <p>We create modern, responsive websites to boost your online presence.</p>
                  </div>
                  <div className="serviceCard">
                      <h2>App Development</h2>
                      <p>Our team builds user-friendly mobile apps for iOS and Android.</p>
                  </div>
                  <div className="serviceCard">
                      <h2>SEO & Marketing</h2>
                      <p>Increase visibility and grow your brand with our SEO strategies.</p>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Services;
