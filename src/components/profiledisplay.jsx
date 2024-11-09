// ProfileDisplay.jsx
import React from 'react';

export function ProfileDisplay({ label, value, type = "text", isEditable = false }) {
  return (
    <div className="info-display">
      <p><strong>{label}:</strong> {value}</p>
      {isEditable && (
        <div>
          <label htmlFor={label}>{label}:</label>
          <input type={type} id={label} defaultValue={value} disabled={!isEditable} />
          <button>Change</button>
        </div>
      )}
    </div>
  );
}
