import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        const userData = {
          token: data.token,
          username: data.username,
          email: data.email,
          password: data.password,
        };
    
        localStorage.setItem('currentUser', JSON.stringify(userData));
        navigate('/roster');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
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
