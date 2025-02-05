import React from "react";
import "./LandingPage.css"; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover the latest trends and shop your favorite products.</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://via.placeholder.com/100" alt="Category 1" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/100" alt="Category 2" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/100" alt="Category 3" />
            <h3>Home & Kitchen</h3>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Join Our Newsletter</h2>
        <p>Subscribe to get the latest updates and exclusive offers.</p>
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default LandingPage;