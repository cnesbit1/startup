import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { RankingSubmissions } from '../components/rankingsubmissions';
import '../app.css';

export function Roster() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      setUsername(currentUser.username);
    } else {
      console.log('No currentUser found in localStorage');
    }
  }, []);

  console.log('Current username:', username);

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
