import React from 'react';

interface CheckboxFilterProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="filter-container checkbox-filter">
      <label>
        <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
        {label}
      </label>
    </div>
  );
};

export default CheckboxFilter;
