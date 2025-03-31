import React, { useState, useEffect } from 'react';

interface NameFilterProps {
  onChange: (value: string) => void;
}

const NameFilter: React.FC<NameFilterProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue]);


  useEffect(() => {
    if (debouncedValue) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="nameFilter">Filter by Name: </label>
      <input
        id="nameFilter"
        type="text"
        placeholder="Search by first or last or fullname"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NameFilter;
