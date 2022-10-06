import React, { useState } from 'react'

import { useDispatch } from "react-redux";
import { nextStep, previousStep } from "../../redux/registerSlice";

const DomainName = () => {
  const dispatch = useDispatch();
    const [domainName, setDomainName] = useState("");
    return (
      <div className="vision-container">
        <div className="form-container">
          <div className="progress">
            <div className="color"></div>
          </div>
          <div className="progress-bar"></div>
          <div className="vision-form"></div>
          <div className="title-text">Have you purchased a domain name?</div>
          <input
            placeholder="www.etheware.com"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
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
          <div className="button-container">
            <div className="back-text"  onClick={() => dispatch(previousStep())}>Back</div>
            <button  onClick={() => dispatch(nextStep())}>Next</button>
          </div>
        </div>
        <div className='later-text'>Set up Later</div>
      </div>
    );
}

export default DomainName