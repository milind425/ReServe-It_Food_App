import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const availableFood = [
    { id: 1, name: "Pizza Slices", quantity: "5 portions", restaurant: "Food Company" },
    { id: 2, name: "Biryani", quantity: "10 portions", restaurant: "Date Biryani" },
    { id: 3, name: "Burgers", quantity: "20 portions", restaurant: "Indigo Company" },
    { id: 4, name: "Kebabs", quantity: "100 portions", restaurant: "Singh Kebabs" },
    { id: 5, name: "French Fries", quantity: "40 portions", restaurant: "Thombre Special Outlet" },
    { id: 6, name: "Noodles", quantity: "200 portions", restaurant: "Deshpande Noodles" },
    { id: 7, name: "Chikki", quantity: "200 portions", restaurant: "Gajab Chikki" },
    { id: 8, name: "Saffron Rice with Chicken", quantity: "15 portions", restaurant: "Saffron Bliss" }
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      
      <div className="available-food">
        <h3>Available Food for Donation</h3>
        <div className="food-cards">
          {availableFood.map((food) => (
            <div key={food.id} className="food-card">
              <h4>{food.name}</h4>
              <p>{food.quantity}</p>
              <p>From: {food.restaurant}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
