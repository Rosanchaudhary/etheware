import React from "react";
import "./DropDownSelector.css";

const DropDownSelector = ({ label, options, selectValue, setSelectValue }) => {
  return (
    <div className="dropdown-container">
      <label>{label}</label>
      <select
        className="select-container"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        onBlur={(e) => setSelectValue(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map((item) => (
          <option key={item.label} value={item.value}>
            {item.value}
          </option>
        ))} 
      </select>
    </div>
  );
};

export default DropDownSelector;
