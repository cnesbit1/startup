// RankingSubmissions.jsx
import React, { useState } from 'react';
import { VotingSystemSelector } from '../components/votingsystemselector';
import { Table } from '../components/table';

export function RankingSubmissions() {
  const [votingSystem, setVotingSystem] = useState("Select Voting Type");

  const rows = [
    { place: 1, text: 'Idea 1', votes: 43 },
    { place: 2, text: 'Idea 2', votes: 34 },
    { place: 3, text: 'Idea 3', votes: 23 },
    { place: 4, text: 'Idea 4', votes: 22 },
  ];

  const handleVotingSystemChange = (event) => {
    setVotingSystem(event.target.value);
    // Here you can add logic to modify `rows` based on the voting system
  };

  return (
    <section id="ballotbox-roster" className="p-3">
      <div id="voting-systems" className="info-display mb-3">
      <h2 id="current-voting-system" className="text-center mb-4">
        Voting System: {votingSystem}
      </h2>
        <p>There are several voting systems used to determine outcomes in elections, each with its own unique method of counting votes. Ranked Choice Voting allows voters to rank candidates by preference, and if no candidate wins a majority, the least popular candidates are eliminated until one candidate has a majority. Approval Voting lets voters select any number of candidates they approve of, and the candidate with the most approvals wins. Majority Rule requires a candidate to receive more than half of the votes to win. Plurality Voting means the candidate with the most votes wins, even if they do not have a majority. Lastly, the Borda Count assigns points to each candidate based on their ranking by each voter, and the candidate with the highest total points wins. Each system can lead to different outcomes depending on how voters express their preferences.</p>
        <VotingSystemSelector 
        label="Select Voting Type:"
        onChange={handleVotingSystemChange} 
      />
      </div>
    
      
      <Table rows={rows} />

      <div id="voting-systems" className="info-display mb-3">
      <h2>Idea Submission</h2>
      <p>The choice of voting system can significantly affect how ideas are ranked on BallotBox Exchange. Different systems, such as first-past-the-post, ranked-choice voting, or proportional representation, can alter how votes are assigned to ideas, potentially changing which ideas appear at the top. These systems can influence which ideas gain the most support, shape the priorities of the community, and even shift the overall rankings, showing that the method of voting plays a crucial role in determining which ideas lead. For example, if certain users were given increasingly larger votes based on how long they've been registered then newer users may have very little influence indeed.</p>
      </div>

    </section>
  );
}
