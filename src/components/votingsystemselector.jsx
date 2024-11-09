// VotingSystemSelector.jsx
import React from 'react';

export function VotingSystemSelector() {
  return (
    <div className="voting-system-container">
      <label htmlFor="voting-system" className="voting-system-label">Select Voting Type:</label>
      <select id="voting-system" className="voting-system-select">
        <option value="">Select a voting system...</option>
        <option value="Ranked Choice Voting">Ranked Choice Voting</option>
        <option value="Approval Voting">Approval Voting</option>
        <option value="Majority Rule">Majority Rule</option>
        <option value="Plurality Voting">Plurality Voting</option>
        <option value="Borda Count">Borda Count</option>
      </select>
    </div>
  );
}
