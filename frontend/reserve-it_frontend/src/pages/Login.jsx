import React from 'react';
import LoginForm from '../components/Authentication/LoginForm';
import './Auth.css';

const Login = () => {
  const handleLogin = (data) => {
    console.log('Login data:', data);
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
