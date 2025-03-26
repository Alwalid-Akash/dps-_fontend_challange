import React from 'react';

interface CityFilterProps {
  cities: string[];
  onChange: (value: string) => void;
}

const CityFilter: React.FC<CityFilterProps> = ({ cities, onChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="cityFilter">Filter by City: </label>
      <select id="cityFilter" onChange={(e) => onChange(e.target.value)}>
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
