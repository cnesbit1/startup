import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ProfileDisplay } from '../components/profiledisplay';
import { Table } from '../components/table';

export function User() {
  const username = "JohnDoe";  // Replace with dynamic data as needed
  
  const submissions = [
    { text: 'Hello World', votes: 12, place: '4th' },
    { text: 'Her', votes: 4, place: '32nd' },
  ];

  return (
    <div className="container-fluid">
      {/* Pass username to Header */}
      <Header title="User Profile" username={username} />
      
      <main>
        <section id="user-profile">
          <ProfileDisplay label="Username" value={username} isEditable={true} />
          <ProfileDisplay label="Password" value="[Password Placeholder]" type="password" isEditable={true} />
          <ProfileDisplay label="Email" value="[Email Placeholder]" type="email" isEditable={true} />
        </section>
        
        <section id="idea-submission">
          <h2>Idea Submission</h2>
          <Table rows={submissions} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
