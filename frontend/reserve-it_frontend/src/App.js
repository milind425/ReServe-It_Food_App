import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import FoodDetails from './pages/FoodDetails';
import PickupSchedule from './pages/PickupSchedule';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Food Sharing Platform</h1>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/schedule" element={<PickupSchedule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;