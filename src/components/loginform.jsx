import React from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();

  // Function to handle login and navigate to the Roster page
  const handleLogin = () => {
    // Add any login validation logic here if needed
    navigate('/roster');
  };

  return (
    <div id="login-form">
      <h3>Login</h3>
      <div>
        <label htmlFor="login-username">Username:</label>
        <input type="text" id="login-username" />
      </div>
      <div>
        <label htmlFor="login-password">Password:</label>
        <input type="password" id="login-password" />
      </div>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}
