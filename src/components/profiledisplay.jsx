import React, { useState } from 'react';

export function ProfileDisplay({ label, value, type = "text", isEditable = false, onChange, validateInput }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;

    const isDuplicate = validateInput(label, newValue);
    if (isDuplicate) {
      alert('Username, email, or password already exists. Please choose a different one.');
      setInputValue(value);
      return;
    }

    setInputValue(newValue);
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
