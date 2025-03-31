import React from 'react';

interface NameFilterProps {
  onChange: (value: string) => void;
}

const NameFilter: React.FC<NameFilterProps> = ({ onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="filter-container ">
      <label htmlFor="nameFilter">Filter by Name: </label>
      <input
        id="nameFilter"
        type="text"
        placeholder="Search by first or last name"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NameFilter;
