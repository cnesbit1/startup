import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ProfileDisplay } from '../components/profiledisplay';
import { Table } from '../components/table';
import { VotingSystemSelector } from '../components/votingsystemselector';
import { NewSubmissionInput } from '../components/newsubmissioninput';

export function User() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Retrieve the current user's data from localStorage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUsername(currentUser.username);
      setEmail(currentUser.email);
    }
  }, []);

  const submissions = [
    { text: 'Hello World', votes: 12, place: '4th' },
    { text: 'Her', votes: 4, place: '32nd' },
  ];

  return (
    <div className="container-fluid">
      <Header title="User Profile" username={username} />

      <main>
        {/* User Profile Section */}
        <section id="user-profile">
          <h2>User Profile Information</h2>
          
          <ProfileDisplay label="Username" value={username} isEditable={true} />
          <ProfileDisplay label="Password" value="[Password Placeholder]" type="password" isEditable={true} />
          <ProfileDisplay label="Email" value={email} type="email" isEditable={true} />

          {/* Voting System Preference Selector */}
          <div className="voting-preference-container my-3">
            <VotingSystemSelector label="Voting System Preference:" />
          </div>
        </section>
        
        {/* Idea Submission Section */}
        <section id="idea-submission">
          <h2>Idea Submission</h2>
          
          {/* Submission Requirements */}
          <div id="submission-requirements" className="info-display mb-3">
            <p>Please ensure that your submission is original, clear, relevant to the objectives of BallotBox Exchange, concise (under 300 words), and free of any personal, confidential, or sensitive information.</p>
          </div>
          
          {/* Table of Submissions */}
          <div id="submissions" className="info-display mb-3">
            <p>Submissions</p>
            <Table rows={submissions} />
          </div>

          {/* New Submission Input */}
          <NewSubmissionInput />
        </section>
      </main>

      <Footer />
    </div>
  );
}
