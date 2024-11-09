import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { VotingSystemSelector } from '../components/votingsystemselector';
import { Table } from '../components/table';

const rows = [
  { place: 1, text: 'Idea 1', votes: 43 },
  { place: 2, text: 'Idea 2', votes: 34 },
  { place: 3, text: 'Idea 3', votes: 23 },
  { place: 4, text: 'Idea 4', votes: 22 },
  { place: 5, text: 'Idea 5', votes: 22 },
];

// Mock username (replace with real user data as needed)
const username = "JohnDoe";

export function Roster() {
  return (
    <div className="container-fluid">
      {/* Pass username as a prop to Header */}
      <Header title="BallotBox Roster" username={username} />
      
      <main>
        <section id="ballotbox-roster" className="p-3">
          <h2 id="current-voting-system" className="text-center mb-4">
            Voting System: Current Voting System
          </h2>
          <VotingSystemSelector />
          <Table rows={rows} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
