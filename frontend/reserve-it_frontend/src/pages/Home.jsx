import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Include a CSS file for styling

const Home = () => {
  // Sample data for restaurants
  const restaurants = [
    
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">ReServe It</h1>
        <p className="hero-subtitle">Reduce waste, share food, and make an impact today!</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn primary-btn">Login</Link>
          <Link to="/register" className="btn secondary-btn">Register</Link>
        </div>
      </div>
      
      <div className="restaurants-section">
        <div className="restaurant-cards">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="restaurant-logo" />
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <p className="restaurant-description">{restaurant.description}</p>
              <button className="btn reserve-btn">Reserve</button>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
