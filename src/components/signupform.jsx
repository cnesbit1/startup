import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const existingUser = users.find(user => 
      user.username === username || 
      user.email === email || 
      user.password === password
    );
    
    if (existingUser) {
      alert('Username, email, or password already exists. Please choose a different one.');
      return;
    }

    const userData = { username, password, email };
    users.push(userData);

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(userData));

    navigate('/roster');
  };

  return (
    <div id="sign-in-form">
      <h3>Sign Up</h3>
      <div>
        <label htmlFor="signup-username">Username:</label>
        <input
          type="text"
          id="signup-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="signup-password">Password:</label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="signup-email">Email:</label>
        <input
          type="email"
          id="signup-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
