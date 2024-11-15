import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ProfileDisplay } from '../components/profiledisplay';
import { Table } from '../components/table';
// import { VotingSystemSelector } from '../components/votingsystemselector';
import { NewSubmissionInput } from '../components/newsubmissioninput';

export function User() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUsername(currentUser.username);
      setPassword(currentUser.password);
      setEmail(currentUser.email);
    }
  }, []);

  const validateInput = (field, value) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  
    return Object.values(users).some((user) => {
      if (field === 'username') {
        return user.username === value && user.username !== currentUser.username;
      } else if (field === 'email') {
        return user.email === value && user.username !== currentUser.username;
      } else if (field === 'password') {
        return user.password === value && user.username !== currentUser.username;
      }
      return false;
    });
  };

  const handleUserDataChange = async (field, value) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the user token for authentication
      const response = await fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token, // Send the token in the header
        },
        body: JSON.stringify({ field, value }), // Send the updated field and value
      });
  
      if (response.ok) {
        const data = await response.json();
        const updatedUser = data.user;
  
        // Update state and localStorage with the new user data
        if (field === 'username') setUsername(updatedUser.username);
        if (field === 'email') setEmail(updatedUser.email);
        if (field === 'password') setPassword(updatedUser.password);
  
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        alert('User updated successfully!');
      } else {
        const errorData = await response.json();
        alert(errorData.msg || 'Failed to update user data');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  const submissions = [
    { text: 'Hello World', votes: 12, place: '4th' },
    { text: 'Her', votes: 4, place: '32nd' },
  ];

  return (
    <div className="container-fluid">
      <Header title="User Profile" username={username} />

      <main>
        <section id="user-profile">
          <h2>User Profile Information</h2>
          
          <ProfileDisplay 
            label="Username" 
            value={username} 
            isEditable={true} 
            onChange={(newValue) => handleUserDataChange('username', newValue)} 
            validateInput={validateInput}
          />
          <ProfileDisplay 
            label="Password" 
            value={password} 
            type="password" 
            isEditable={true} 
            onChange={(newValue) => handleUserDataChange('password', newValue)} 
            validateInput={validateInput}
          />
          <ProfileDisplay 
            label="Email" 
            value={email} 
            type="email" 
            isEditable={true} 
            onChange={(newValue) => handleUserDataChange('email', newValue)} 
            validateInput={validateInput}
          />

          {/* <div className="voting-preference-container my-3">
            <VotingSystemSelector label="Voting System Preference:" />
          </div> */}
        </section>
        
        <section id="idea-submission">
          
          <div id="submission-requirements" className="info-display mb-3">
            <h2>Idea Submission:</h2>
            <p>Please ensure that your submission is original, clear, relevant to the objectives of BallotBox Exchange, concise (under 300 words), and free of any personal, confidential, or sensitive information.</p>
          </div>
          
          <div id="submissions" className="info-display mb-3">
            <p>Submissions</p>
            <Table rows={submissions} />
          </div>

          <NewSubmissionInput />
        </section>
      </main>

      <Footer />
    </div>
  );
}
