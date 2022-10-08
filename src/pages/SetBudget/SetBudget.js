import React, { useState } from "react";
import InputSlider from "react-input-slider";

import { useDispatch } from "react-redux";
import { setBudget } from "../../redux/projectSlice";
import { nextStep, previousStep } from "../../redux/stepSlice";

import "./SetBudget.css";

const SetBudget = () => {
  const dispatch = useDispatch();
  const [budget, setTheBudget] = useState("");
  const [state, setState] = useState({ x: 10, y: 10 });
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget.length === 0) {
      setFormError("This field is required");
    } else {
      dispatch(nextStep());
      dispatch(setBudget(budget));
    }
  };
  return (
    <div className="vision-container">
      <div className="form-container">
        <div className="progress">
          <div className="color"></div>
        </div>
        <div className="progress-bar"></div>
        <div className="vision-form"></div>
        <div className="title-text">
          Set the budget to get the results you want.
        </div>
        <div className="radio-button-container">
          <input type="radio" id="topping" name="topping" value="Paneer" />
          <div>Enter your own budget</div>
        </div>
        <div className="amount-input-container">
          <input
            placeholder="$"
            value={budget}
            onChange={(e) => setTheBudget(e.target.value)}
          />
          <div>
            $784 Monthly Max Cancel Anytime x4 Developer Speed with Priority
            Support
          </div>
        </div>
        <p>{formError}</p>
        <InputSlider
          styles={{
            track: {
              height: 2,
              width: "100%",
              backgroundColor: "#ccd8fd",
            },
            active: {
              backgroundColor: "#5483ec",
            },
            thumb: {
              width: 10,
              height: 10,
              backgroundColor: "#5483ec",
            },
            disabled: {
              opacity: 0.5,
            },
          }}
          axis="x"
          x={state.x}
          onChange={({ x }) => setState((state) => ({ ...state, x }))}
        />
        <div className="info-text">
          This is confidential and just help us setup your app under the correct
          information.
        </div>

        <div
          style={{
            width: "100%",
            height: " 20px",
            borderBottom: " 1px solid black",
            textAlign: "center",
            marginBottom: "20px",
          }}
        ></div>
        <div className="button-row">
          <div className="back-text" onClick={() => dispatch(previousStep())}>
            Back
          </div>
          <button onClick={handleSubmit}>Next</button>
        </div>
      </div>
      <div className="later-text">Set up Later</div>
    </div>
  );
};

export default SetBudget;
