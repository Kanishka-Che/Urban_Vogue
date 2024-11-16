<div className="home-container">
  {/* Navigation */}
  <nav className="nav-bar">
    <img src={NavImg} alt="Urban Vogue Logo" className="nav-img" />
    <ul className="nav-links">
      <li><NavLink to="/" className="nav-link" aria-label="Home">Home</NavLink></li>
      <li><NavLink to="/About" className="nav-link" aria-label="About Us">About Us</NavLink></li>
      <li><NavLink to="/Services" className="nav-link" aria-label="Services">Services/Products</NavLink></li>
      <li><NavLink to="/Contact" className="nav-link" aria-label="Contact Us">Contact Us</NavLink></li>
      <li><NavLink to="/login" className="button-nav" aria-label="Login">Login</NavLink></li>
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
    <div className="product-gallery" aria-label="Product Gallery">
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
