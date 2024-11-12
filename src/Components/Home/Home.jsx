import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import NavImg from '../../assets/Untitled.png';
import in01 from '../../assets/in01.png';
import in02 from '../../assets/in02.png';
import in03 from '../../assets/in03.png';
import in04 from '../../assets/in04.png';
import in05 from '../../assets/in05.png';

const Home = () => {
  return (

    <div className="home-container">
      {/* Navigation */}
      <nav className="nav-bar">
        <img src={NavImg} alt="Navigation" className="nav-img" />
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><button className="nav-link">About Us</button></li>
          <li><button className="nav-link">Services/Products</button></li>
          <li><NavLink to="/Contact" className="nav-link">Contact Us</NavLink></li>
          <li><NavLink to="/login" className="button-nav">Login</NavLink></li>
        </ul>
      </nav>

    <div>
         <nav>
              <img src={NavImg}/>
              <ul>
              <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/About">About Us</NavLink></li>
                  <li><NavLink to="/Services">Services/Products</NavLink></li>
  
                  <li><NavLink to="/Contact">Contact Us</NavLink></li>
  
                  <li><NavLink to="/login"><button className="buttonNav" >Login</button></NavLink></li>
              </ul>
          </nav>



      {/* Features Section */}
      <section className="section features">
        <h1 className="heading">Welcome to Urban Vogue!</h1>
        <h4 className="subheading">We Love To Make Great Things, Things That Matter!</h4>
        <p className="welcome-text">
          Urban Vogue is your premier online destination for fashion-forward individuals seeking curated collections that blend contemporary trends with timeless elegance. Explore a diverse array of stylish apparel and accessories to elevate your wardrobe.
        </p>
        <h2 className="heading">Featured Products</h2>
        <div className="product-gallery">
          {[in01, in02, in03, in04, in05].map((image, index) => (
            <div className="product-card" key={index}>
              <img src={image} alt={`Product ${index + 1}`} className="product-image" />
              <div className="product-info">
                <p>Dress Name {index + 1}</p>
                <p>${100 + index * 10}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Urban Vogue. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
