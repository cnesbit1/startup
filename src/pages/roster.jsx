import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function Roster() {
  return (
    <div className="container-fluid bg-secondary text-center">
      <Header title="BallotBox Roster" />
      <main>
        <section id="ballotbox-roster">
          <h2 id="current-voting-system">Voting System: Current Voting System</h2>
          <div className="voting-system-container">
            <label htmlFor="voting-system" className="voting-system-label">Select Voting Type:</label>
            <select id="voting-system" className="voting-system-select">
              <option value="" disabled selected>Select a voting system...</option>
              <option value="Ranked Choice Voting">Ranked Choice Voting</option>
              {/* Add more options here */}
            </select>
          </div>
          <table>
            {/* Table content as per HTML structure */}
          </table>
        </section>
      </main>
      <Footer />
    </div>
  );
}
