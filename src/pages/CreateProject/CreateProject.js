import React from "react";
import TextFieldBorder from "../../components/TextFieldBorder/TextFieldBorder";
import AddTemplate from "../../assets/addtemplate.png";
import "./CreateProject.css";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import DropDownIcon from "../../components/DropDownIcon/DropDownIcon";
import ProjectImage from "../../assets/addproject.png";
const CreateProject = () => {
  return (
    <div className="project-container">
      <div className="create-project">
        <div className="project-title"> Create Project</div>
        <div className="project-subtitle">
          You can change these detials any time in your project settings.
        </div>
        <TextFieldBorder label={"Project Name"} />
        <div className="template-options">
          <div className="black-text">Template</div>
          <div className="blue-text">More Templates</div>
        </div>
        <div className="template-container">
          <div className="template-image">
            <img src={AddTemplate} alt="template"></img>
          </div>
          <div className="template-text">
            <div>Blank Project</div>
            <div>
              Start freash with a blank business <br />
              project template.
            </div>
          </div>
          <FaArrowRight />
        </div>
        <div className="black-text">Project Size</div>
        <DropDownIcon />
        <p>
          <strong>Access</strong> Anyone with access to this channel can access
          and administer this project.{" "}
          <span style={{ color: "blue" }}>Upgrade your plan</span> to customize
          project permission.
        </p>
        <div className="text-icon">
          <div className="black-text">Project ID</div>
          <AiOutlineExclamationCircle size={"12px"} />
        </div>
        <input className="project-id-input" />
        <div className="submit-buttons">
          <button className="create-button">Create Project</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
      <div className="upload-image">
        <div className="project-title">Upload Project image</div>

        <img src={ProjectImage} alt="project" />
        <div className="upload-buttons">
          <button className="cancel-button">Upload</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
