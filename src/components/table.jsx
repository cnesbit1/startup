import React, { useEffect, useState } from 'react';

export function Table() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setRows(storedSubmissions);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Text</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.place}</td>
            <td>{row.text}</td>
            <td>{row.votes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
