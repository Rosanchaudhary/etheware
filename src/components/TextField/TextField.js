import React from "react";

const TextField = ({ label, value, setValue, placeholder ,icon}) => {
  return (
    <div className="dropdown-container">
      <div>
        <label>{label}</label>
        {icon}
      </div>

      <input 
        placeholder={placeholder}
        className="select-container"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
};

export default TextField;
