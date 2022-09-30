import React from "react";
import './SliderInput.css'

const SliderInput = () => {
  return (
    <div className="slider-container">
      <input
        type="range"
        name="range"
        min="0"
        max="100"
        id="range"
        className="range"
      />
    </div>
  );
};

export default SliderInput;
