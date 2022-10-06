import React from "react";
import "./SelectDate.css" 

import { useDispatch } from "react-redux";
import { nextStep, previousStep } from "../../redux/registerSlice";

const SelectDate = () => {
  const dispatch = useDispatch();
  //const [organizationName, setOrganizationName] = useState("");
  return (
    <div className="vision-container">
      <div className="form-container">
        <div className="progress">
          <div className="color"></div>
        </div>
        <div className="progress-bar"></div>
        <div className="vision-form"></div>
        <div className="title-text">
          Up next when would you like to show your sevice?
        </div>
        <label for="birthday">Calendar</label>
        <input style={{width:"100px"}} type="date" name="date" />
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
        <div className="button-container">
          <div className="back-text" onClick={() => dispatch(previousStep())}>Back</div>
          <button onClick={() => dispatch(nextStep())}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
