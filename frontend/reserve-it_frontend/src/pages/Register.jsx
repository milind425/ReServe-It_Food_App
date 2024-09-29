import React from 'react';
import RegisterForm from '../components/Authentication/RegisterForm';
import './Auth.css';

const Register = () => {
  const handleRegister = (data) => {
    console.log('Register data:', data);
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default Register;
