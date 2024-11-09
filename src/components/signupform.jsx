import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Save user signup data to localStorage
    const userData = { username, password, email };
    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect to roster page or another page as needed
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
