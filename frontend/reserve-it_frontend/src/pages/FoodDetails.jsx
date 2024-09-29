import React from 'react';
import './FoodDetails.css';

const FoodDetails = ({ match }) => {
  const foodId = match.params.id;

  return (
    <div className="food-details-container">
      <h2>Food Details</h2>
      <div className="food-card">
        <h3>Food Item ID: {foodId}</h3>
        {/* Display food details here */}
      </div>
    </div>
  );
};

export default FoodDetails;
