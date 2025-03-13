import React from 'react';

const FilterBar = ({ searchPlaceholder, filterOptions }) => {
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder={searchPlaceholder}
        className="border rounded px-3 py-1 text-sm"
      />
      <select className="border rounded px-3 py-1 text-sm">
        {filterOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;