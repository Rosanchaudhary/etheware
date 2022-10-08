import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/registerSlice";
//import { addUserDetails} from "../../redux/registerSlice";
import {nextStep,previousStep} from '../../redux/stepSlice';

import "./OrganizationName.css";
const OrganizationName = () => {
  const dispatch = useDispatch();
  const [organizationName, setOrganizationName] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (organizationName.length === 0) {
      setFormError("This field is required");
    } else {
      dispatch(nextStep())
      dispatch(addUserDetails(organizationName));
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
        <div className="title-text"> OK, What is your organization name?</div>
        <p>{formError}</p>
        <input
          placeholder="Your organization name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
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

          <button onClick={handleSubmit}> 
            Next
          </button>
          {/* <button onClick={() => dispatch(nextStep())}>Next</button> */}
        </div>
      </div>
    </div>
  );
};

export default OrganizationName;
