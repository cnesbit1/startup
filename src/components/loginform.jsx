import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Store login data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // for demonstration only; consider more secure handling for production
    navigate('/roster');
  };

  return (
    <div id="login-form">
      <h3>Login</h3>
      <div>
        <label htmlFor="login-username">Username:</label>
        <input type="text" id="login-username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="login-password">Password:</label>
        <input type="password" id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}
