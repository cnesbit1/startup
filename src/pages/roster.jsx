import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { RankingSubmissions } from '../components/rankingsubmissions';
import '../app.css';

export function Roster() {
  const [username, setUsername] = useState('');

  // Load the logged-in user's username from localStorage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUsername(currentUser.username);
    }
  }, []);

  return (
    <div className="container-fluid">
      <Header title="BallotBox Roster" username={username} />
      <main>
        <RankingSubmissions />
      </main>
      <Footer />
    </div>
  );
}
