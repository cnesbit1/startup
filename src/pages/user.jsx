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

  const handleUserDataChange = async (field, value) => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const token = currentUser?.token;
  
      const response = await fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ field, value }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const updatedUser = data.user;
  
        if (field === 'username') setUsername(updatedUser.username);
        if (field === 'email') setEmail(updatedUser.email);
        if (field === 'password') setPassword(updatedUser.password);
  
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        alert(`${field} updated successfully!`);
      } else {
        const errorData = await response.json();
        alert(errorData.msg || `Failed to update ${field}.`);
      }
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      alert(`An unexpected error occurred while updating ${field}.`);
    }
  };

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
          />
          <ProfileDisplay 
            label="Password" 
            value={password} 
            type="password" 
            isEditable={true} 
            onChange={(newValue) => handleUserDataChange('password', newValue)} 
          />
          <ProfileDisplay 
            label="Email" 
            value={email} 
            type="email" 
            isEditable={true} 
            onChange={(newValue) => handleUserDataChange('email', newValue)} 
          />
        </section>

        <section id="idea-submission">
          <div id="submission-requirements" className="info-display mb-3">
            <h2>Idea Submission:</h2>
            <p>Please ensure that your submission is original, clear, relevant to the objectives of BallotBox Exchange, concise (under 300 words), and free of any personal, confidential, or sensitive information.</p>
          </div>

          <div id="submissions" className="info-display mb-3">
            <p>Your Submissions</p>
            <Table usernameFilter={username} />
          </div>

          <NewSubmissionInput />
        </section>
      </main>

      <Footer />
    </div>
  );
}
