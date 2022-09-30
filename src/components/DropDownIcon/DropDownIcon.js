import React, { useState } from "react";
import Select from "react-select";

import { FaPeopleArrows } from "react-icons/fa";

const DropDownIcon = () => {
  const data = [
    {
      value: 1,
      text: "Small",
      icon: <FaPeopleArrows />,
    },
    {
      value: 2,
      text: "Medium",
      icon: <FaPeopleArrows />,
    },
    {
      value: 3,
      text: "Large",
      icon: <FaPeopleArrows />,
    },
  ];
  const [selectedOption, setSelectedOption] = useState(data[0]);

  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const styles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#f5f5f5",
      border: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: state.data.color,
      backgroundColor: state.data.bgcolor,
      fontSize: state.selectProps.myFontSize,
    }),
  };

  return (
    <div className="App">
      <Select
        styles={styles}
        placeholder="Select Option"
        value={selectedOption}
        options={data}
        onChange={handleChange}
        getOptionLabel={(e) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {e.icon}
            <span style={{ marginLeft: 5 }}>{e.text}</span>
          </div>
        )}
      />
    </div>
  );
};

export default DropDownIcon;
