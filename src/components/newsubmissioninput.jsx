import React, { useState } from 'react';

export function NewSubmissionInput() {
  const [submission, setSubmission] = useState('');

  const handleNewSubmission = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token  // Send the token for authentication
        },
        body: JSON.stringify({ text: submission, votes: 0 })
      });

      if (response.ok) {
        const updatedSubmissions = await response.json();
        setSubmission('');
        console.log('Submissions updated:', updatedSubmissions);
      } else {
        alert('Failed to submit.');
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
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
