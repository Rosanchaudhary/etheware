import React, { useState } from "react";
import InputSlider from "react-input-slider";

const SetBudget = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [state, setState] = useState({ x: 10, y: 10 });
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
            style={{ width: "20%", marginRight: "10px" }}
            placeholder="$"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />
          <div>
            $784 Monthly Max <br />
            Cancel Anytime x4 Developer Speed with Priority Support
          </div>
        </div>
        <InputSlider
          styles={{
            track: {
              height:2,
              width:500,
              backgroundColor: '#ccd8fd',
              
            },
            active: {
              backgroundColor: '#5483ec',
            
            },
            thumb: {
              width: 10,
              height: 10,
              backgroundColor:"#5483ec"
            },
            disabled: {
              opacity: 0.5
            }
          }}
        
          axis="x"
          x={state.x}
          onChange={({ x }) => setState((state) => ({ ...state, x }))}
        />
        <div className="info-text" style={{paddingTop:"20px"}}>
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
        <div className="button-container">
          <div className="back-text">Back</div>
          <button>Next</button>
        </div>
      </div>
      <div className='later-text'>Set up Later</div>
    </div>
  );
};

export default SetBudget;
