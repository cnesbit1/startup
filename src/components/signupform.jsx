import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
        const userData = {
          token: data.token,
          username: data.username,
          email: data.email,
          password: data.password,
        };
  
        localStorage.setItem('currentUser', JSON.stringify(userData));
        navigate('/roster');
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response from server:', errorData);
        alert(errorData.msg || 'Sign up failed');
      }
    } catch (error) {
      console.error('Sign up failed:', error);
      alert('An unexpected error occurred. Please try again.');
    }
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
