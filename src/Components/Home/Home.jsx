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
        <div className="hero-text">
          <h1>Welcome to Urban Vogue</h1>
          <p>Your destination for timeless elegance and contemporary trends.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section products">
        <h2>Featured Products</h2>
        <div className="product-gallery">
          {[in01, in02, in03, in04, in05].map((image, index) => (
            <div className="product-card" key={index}>
              <img src={image} alt={`Product ${index + 1}`} className="product-image" />
              <h3>Dress {index + 1}</h3>
              <p>${100 + index * 20}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Urban Vogue. All rights reserved.</p>
        <p>Designed with ❤️ by Urban Vogue Team</p>
      </footer>
    </div>
  );
};

export default Home;
