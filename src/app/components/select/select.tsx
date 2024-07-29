'use client'

import React, { useState } from 'react';

interface SelectProps {
  options: string[];
  onSelect?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div>
      <label htmlFor="simple-select">Sort by:</label>
      <select id="simple-select" value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
