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
          <li><NavLink to="/"><button className="button-contact">Home</button></NavLink></li>
          <li><button className="button-contact">About Us</button></li>
          <li><button className="button-contact">Services/Products</button></li>
          <li><NavLink to="/Contact"><button className="button-contact">Contact Us</button></NavLink></li>
          <li><NavLink to="/login"><button className="button-nav">Login</button></NavLink></li>
        </ul>
      </nav>

      {/* Features Section */}
      <section className="section features">
        <h1 className='heading'>Welcome to Urban Vogue!</h1>
        <h4 className='second'>We Love To Make Great Things, Things That Matter!</h4>
        <p className='welcome'>
          Urban Vogue is your premier online destination for fashion-forward individuals seeking curated collections that blend contemporary trends with timeless elegance. Explore a diverse array of stylish apparel and accessories meticulously selected to elevate your wardrobe. Whether you're browsing for casual essentials or statement pieces, Urban Vogue offers a seamless shopping experience with a focus on quality, style, and customer satisfaction. Embrace your unique sense of fashion with Urban Vogue, where every click brings you closer to discovering your signature style.
        </p>
        <h2 className='heading'>Featured Products</h2>
        <div className="hero-images">
          <div className="row">
            <div className="column">
              <img src={in01} alt="In01" className="hover-image" />
              <div className="product-info">
                <p>Dress Name 1</p>
                <p>$100</p>
              </div>
            </div>
            <div className="column">
              <img src={in02} alt="In02" className="hover-image1"/>
              <div className="product-info">
                <p>Dress Name 2</p>
                <p>$150</p>
              </div>
            </div>
            <div className="column">
              <img src={in03} alt="In03" className="hover-image2"/>
              <div className="product-info">
                <p>Dress Name 3</p>
                <p>$120</p>
              </div>
            </div>
            <div className="column">
              <img src={in04} alt="In04" className="hover-image3"/>
              <div className="product-info">
                <p>Dress Name 4</p>
                <p>$130</p>
              </div>
            </div>
            <div className="column">
              <img src={in05} alt="In05" className="hover-image4"/>
              <div className="product-info">
                <p>Dress Name 5</p>
                <p>$140</p>
              </div>
            </div>
          </div>
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
