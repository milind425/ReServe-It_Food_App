import React from 'react';

const ImpactTracker = ({ foodSaved, environmentalImpact }) => {
  return (
    <div>
      <h3>Impact Tracker</h3>
      <p>Food Saved: {foodSaved} kg</p>
      <p>Environmental Impact: {environmentalImpact} CO2 reduction</p>
    </div>
  );
};

export default ImpactTracker;
