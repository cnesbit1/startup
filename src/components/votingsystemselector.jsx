import React, { useState, useEffect } from 'react';

export function VotingSystemSelector({ label, onChange }) {
  const [selectedVotingSystem, setSelectedVotingSystem] = useState(localStorage.getItem('votingSystem') || '');

  const handleChange = (event) => {
    const newVotingSystem = event.target.value;
    setSelectedVotingSystem(newVotingSystem);
    localStorage.setItem('votingSystem', newVotingSystem);
    if (onChange) onChange(event);
  };

  useEffect(() => {
    // Load preference from localStorage
    const savedVotingSystem = localStorage.getItem('votingSystem');
    if (savedVotingSystem) setSelectedVotingSystem(savedVotingSystem);
  }, []);

  return (
    <div className="voting-system-container">
      <label htmlFor="voting-system" className="voting-system-label">{label}</label>
      <select id="voting-system" className="voting-system-select" value={selectedVotingSystem} onChange={handleChange}>
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
