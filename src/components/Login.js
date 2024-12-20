// src/Login.js
import React, { useState } from 'react';
import '../styles/Login.css'; // Optional, for custom styles
import { useNavigate } from 'react-router-dom'; 
import Home from './Home';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Both fields are required.');
      return;
    }
    // Implement your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset error if submission is successful
    setError('');
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the Enroll page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" onclick={handleHomeClick}>Login</button>
      </form>
    </div>
  );
};

export default Login;
