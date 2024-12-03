import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Table({ usernameFilter = null, onVote }) {
  const [rows, setRows] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/submissions');
        if (response.ok) {
          let data = await response.json();

          if (usernameFilter) {
            data = data.filter((submission) => submission.user === usernameFilter);
          }

          const sortedData = data.sort((a, b) => b.votes - a.votes);
          setRows(sortedData);
        } else {
          console.error('Failed to fetch submissions');
        }
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();

    const socket = new WebSocket('ws://localhost:4000');
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
    
      if (data.type === 'vote_update') {
        setRows((prevRows) => {
          // Update the specific row's votes
          const updatedRows = prevRows.map((row) =>
            row.text === data.submission.text ? { ...row, votes: data.submission.votes } : row
          );
    
          // Sort the rows by votes in descending order
          return updatedRows.sort((a, b) => b.votes - a.votes);
        });

        if (onVote) {
          onVote();
        }
      }
    };

    return () => socket.close();
  }, [usernameFilter]);

  const handleVote = async (index) => {
    const submission = rows[index];
    const token = JSON.parse(localStorage.getItem('currentUser'))?.token;

    if (!token) {
      alert('You must be logged in to vote.');
      return;
    }

    try {
      const response = await fetch(`/api/submissions/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ text: submission.text }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Vote error:', errorData);
        alert(errorData.msg || 'Failed to toggle vote.');
      }
    } catch (error) {
      console.error('Error toggling vote:', error);
      alert('An unexpected error occurred while voting.');
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Text</th>
          <th>Votes</th>
          {location.pathname === '/roster' && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.text}</td>
            <td>{row.votes}</td>
            {location.pathname === '/roster' && (
              <td>
                <button onClick={() => handleVote(index)}>Vote</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
