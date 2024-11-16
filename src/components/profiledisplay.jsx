import React, { useState } from 'react';

export function ProfileDisplay({ label, value, type = "text", isEditable = false, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <div className="info-display">
      <p><strong>{label}:</strong> {value}</p>
      {isEditable && (
        <div>
          <label htmlFor={label}>{label}:</label>
          <input 
            type={type} 
            id={label} 
            value={inputValue} 
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Change</button>
        </div>
      )}
    </div>
  );
}
