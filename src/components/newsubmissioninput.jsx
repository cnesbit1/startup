import React, { useState } from 'react';

export function NewSubmissionInput() {
  const [submission, setSubmission] = useState('');

  const handleNewSubmission = async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.token) {
      alert('You must be logged in to submit.');
      return;
    }

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': currentUser.token,
        },
        body: JSON.stringify({ text: submission, votes: 0 }),
      });

      if (response.ok) {
        const updatedSubmissions = await response.json();
        console.log('Submissions updated:', updatedSubmissions);
        setSubmission('');
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Submission error:', errorData);
        alert(errorData.msg || 'Failed to submit.');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      alert('An unexpected error occurred.');
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
