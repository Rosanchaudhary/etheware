import React from "react";
import "./TextFieldBorder.css"
const TextFieldBorder = ({ value, setValue, placeholder,label}) => {
  return (
    <div className="text-field-border">
      <div className="text-lable">{label}</div>
      <input
        placeholder={placeholder} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextFieldBorder;
