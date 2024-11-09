import React, { useState } from 'react';

export function NewSubmissionInput() {
  const [submission, setSubmission] = useState('');

  const handleNewSubmission = () => {
    const currentSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const newSubmission = { text: submission, votes: 0, place: `${currentSubmissions.length + 1}th` };
    localStorage.setItem('submissions', JSON.stringify([...currentSubmissions, newSubmission]));
    setSubmission('');
    // Trigger re-render if using this component inside Table display
  };

  return (
    <div id="new-submission" className="info-display">
      <p>New Submission</p>
      <input 
        type="text" 
        placeholder="Enter your submission" 
        className="w-100 p-2" 
        value={submission} 
        onChange={(e) => setSubmission(e.target.value)} 
      />
      <button onClick={handleNewSubmission} className="mt-2">Submit</button>
    </div>
  );
}
