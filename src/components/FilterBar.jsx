import React from "react";

function FilterBar({ buildingFilter, setBuildingFilter, buildingOptions }) {
  return (
    <div className="filter-bar">
      <label>Filter by Building:</label>
      <select
        value={buildingFilter}
        onChange={(e) => setBuildingFilter(e.target.value)}
      >
        {buildingOptions.map((building) => (
          <option key={building} value={building}>
            {building}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;