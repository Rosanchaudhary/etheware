import React, { useState } from "react";
import "./Category.css";
import Call from "../../assets/call.png";
import Pointer from "../../assets/pointer.png";
import Building from "../../assets/building.png";
import ProfileImage from "../../assets/addphoto.png";
import { FaCheck } from "react-icons/fa";

import { setCategory} from "../../redux/registerSlice";
import { useDispatch } from "react-redux";

const options = [
  { id: 0, icon: Call, title: "Individual" },
  { id: 1, icon: Pointer, title: "Business or Enterprise" },
  { id: 2, icon: Building, title: "School or Federal Organization" },
];

const Category = () => {
  const dispatch = useDispatch();
  const [category, setTheCategory] = useState({});
  return (
    <div className="vision-container">
      <div className="form-container">
        <div className="progress">
          <div className="color"></div>
        </div>
        <div className="progress-bar"></div>
        <div className="vision-form"></div>
        <div className="title-text"> What category benefits you?</div>
        {options.map((option) => (
          <div
            className="options"
            onClick={() => setTheCategory(option)}
            key={option.id}
            style={{
              border:
                option.id === category.id ? "2px solid blue" : "2px solid grey",
            }}
          >
            <div className="not-selected">
              <img src={option.icon} alt="call" />
              <div>{option.title}</div>
            </div>

            {option.id === category.id ? <FaCheck color="blue" /> : null}
          </div>
        ))}
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
            <div>
              Call or text for free setup support at <br />
              +1(888) 546-6865 <br />
              9am to 9pm PT, <br />
              Mon - Fri
            </div>
          </div>
          <button  onClick={()=>dispatch(setCategory(category.title))}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
