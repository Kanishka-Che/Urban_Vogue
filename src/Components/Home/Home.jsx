import React from 'react';
import './Home.css';
import in01 from '../../assets/in01.png';
import in02 from '../../assets/in02.png';
import in03 from '../../assets/in03.png';
import in04 from '../../assets/in04.png';
import in05 from '../../assets/in05.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Welcome to Urban Vogue</h1>
          <p className="hero-subheading">Elevate Your Style, Redefine Elegance</p>
          <button className="hero-button">Shop Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <h2 className="heading">Why Choose Urban Vogue?</h2>
        <p className="welcome-text">
          Discover exclusive collections that bring together contemporary trends and timeless designs. Let your wardrobe reflect your unique style!
        </p>
        <h2 className="heading">Featured Products</h2>
        <div className="product-gallery">
          {[in01, in02, in03, in04, in05].map((image, index) => (
            <div className="product-card" key={index}>
              <img src={image} alt={`Product ${index + 1}`} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">Dress Name {index + 1}</h3>
                <p className="product-price">${100 + index * 10}</p>
                <button className="product-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Urban Vogue. All rights reserved.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
          <p className="footer-credit">Designed with ❤️ by the Urban Vogue Team</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
