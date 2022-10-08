import React, { useState } from "react";
import "./Visions.css";

import { useDispatch } from "react-redux";
import { nextStep } from "../../redux/stepSlice";
import { setVision } from "../../redux/registerSlice";

import Call from "../../assets/call.png";
import Pointer from "../../assets/pointer.png";
import Building from "../../assets/building.png"; 
import Play from "../../assets/play.png";
import ProfileImage from "../../assets/addphoto.png";
import { FaCheck } from "react-icons/fa";


const options = [
  { id: 0, icon: Call, title: "Build an application" },
  { id: 1, icon: Pointer, title: "Build a website" },
  { id: 2, icon: Building, title: "Get more sales or leads" },
  { id: 3, icon: Play, title: "Modify existing app or service" },
];
const Vision = () => {
  const dispatch = useDispatch();
  const [vision, setTheVision] = useState({});
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Object.entries(vision).length);
    if (Object.entries(vision).length === 0) {
      setFormError("Choose one option");
    } else {
      dispatch(setVision(vision.title));
      dispatch(nextStep())
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
        <div className="title-text"> What's your main vision?</div>
        {options.map((option) => (
          <div
            className="select-options "
            onClick={() => setTheVision(option)}
            key={option.id}
            style={{
              border:
                option.id === vision.id ? "2px solid blue" : "2px solid grey",
            }}
          >
            <div className="not-selected">
              <img src={option.icon} alt="call" />
              <div>{option.title}</div>
            </div>

            {option.id === vision.id ? <FaCheck color="blue" /> : null}
          </div>
        ))}
        <p>{formError}</p>
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
          <img src={ProfileImage} alt="add" />
          <div className="support-texts">
            <div
              style={{
                fontSize: "24px",
              }}
            >
              <strong>Need support?</strong>
            </div>
            <p>
              Call or text for free setup support at +1(888) 546-6865 9am to 9pm
              PT, Mon - Fri
            </p>
          </div>
          <button onClick={handleSubmit}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Vision;
