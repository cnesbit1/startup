// RankingSubmissions.jsx
import React, { useState } from 'react';
import { VotingSystemSelector } from '../components/votingsystemselector';
import { Table } from '../components/table';

export function RankingSubmissions() {
  const [votingSystem, setVotingSystem] = useState("Select Voting Type");

  // Example rows data to populate the table
  const rows = [
    { place: 1, text: 'Idea 1', votes: 43 },
    { place: 2, text: 'Idea 2', votes: 34 },
    { place: 3, text: 'Idea 3', votes: 23 },
    { place: 4, text: 'Idea 4', votes: 22 },
  ];

  // Function to handle voting system change
  const handleVotingSystemChange = (event) => {
    setVotingSystem(event.target.value);
    // Here you can add logic to modify `rows` based on the voting system
  };

  return (
    <section id="ballotbox-roster" className="p-3">
      <h2 id="current-voting-system" className="text-center mb-4">
        Voting System: {votingSystem}
      </h2>
      
      <VotingSystemSelector 
        label="Select Voting Type:"
        onChange={handleVotingSystemChange} 
      />
      
      <Table rows={rows} />
    </section>
  );
}
