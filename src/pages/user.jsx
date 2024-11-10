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
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  
    return users.some(user => {
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

  const handleUserDataChange = (field, value) => {
    if (validateInput(field, value)) {
      alert('Username, email, or password already exists. Please choose a different one.');
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    if (field === 'username') {
      setUsername(value);
    } else if (field === 'password') {
      setPassword(value);
    } else if (field === 'email') {
      setEmail(value);
    }

    const updatedUser = {
      username: field === 'username' ? value : currentUser.username,
      password: field === 'password' ? value : currentUser.password,
      email: field === 'email' ? value : currentUser.email,
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(user =>
      user.username === currentUser.username ? updatedUser : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
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
