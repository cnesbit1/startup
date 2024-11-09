import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignupForm() {
  const navigate = useNavigate();

  // Function to handle sign up and navigate to the Roster page
  const handleSignUp = () => {
    // Add any sign-up logic or validation here if needed
    navigate('/roster');
  };

  return (
    <div id="sign-in-form">
      <h3>Sign Up</h3>
      <div>
        <label htmlFor="signin-username">Username:</label>
        <input type="text" id="signin-username" />
      </div>
      <div>
        <label htmlFor="signin-password">Password:</label>
        <input type="password" id="signin-password" />
      </div>
      <div>
        <label htmlFor="signin-email">Email:</label>
        <input type="email" id="signin-email" />
      </div>
      <button type="button" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
