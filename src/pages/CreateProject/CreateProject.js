import React, { useRef, useState } from "react";
import "./CreateProject.css";

import { FaArrowRight } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import DropDownIcon from "../../components/DropDownIcon/DropDownIcon";
import ProjectImage from "../../assets/addproject.png";
import TextFieldBorder from "../../components/TextFieldBorder/TextFieldBorder";
import AddTemplate from "../../assets/addtemplate.png";

import { useDispatch } from "react-redux";
import { nextStep } from "../../redux/stepSlice";
import { projectTitle,uploadProjectPhoto } from "../../redux/projectSlice";

const CreateProject = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      projectName: projectName,
      projectId: projectId,
      selectedImage: selectedImage,
    };
    setFormErrors(validate(formValues));
    if (Object.entries(validate(formValues)).length === 0) {
      dispatch(uploadProjectPhoto(selectedImage));
      dispatch(projectTitle({ projectName, projectId}));
      dispatch(nextStep());
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.projectName) {
      errors.projectName = "Project name is required!";
    }
    if (!values.projectId) {
      errors.projectId = "project Id is required!";
    }
    if (!values.selectedImage) {
      errors.selectedImage = "Image is required!";
    }
    return errors;
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <div className="project-container">
      <div className="create-project">
        <div className="project-title"> Create Project</div>
        <div className="project-subtitle">
          You can change these detials any time in your project settings.
        </div>
        <TextFieldBorder
          label={"Project Name"}
          value={projectName}
          setValue={setProjectName}
        />
        <p>{formErrors.projectName}</p>
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
            Start freash with a blank business project template.
          </div>
          <FaArrowRight />
        </div>
        <div className="black-text">Project Size</div>
        <DropDownIcon />
        <p>
          <strong>Access</strong> Anyone with access to this channel can access
          and administer this project.
          <span style={{ color: "blue" }}>Upgrade your plan</span> to customize
          project permission.
        </p>
        <div className="text-icon">
          <div className="black-text">Project ID</div>
          <AiOutlineExclamationCircle size={"12px"} />
        </div>
        <input
          className="project-id-input"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
        <p>{formErrors.projectId}</p>
        <div className="submit-buttons">
          <button className="create-button" onClick={handleSubmit}>
            Create Project
          </button>
          <button className="cancel-button" onClick={removeSelectedImage}>
            Cancel
          </button>
        </div>
      </div>
      <div className="upload-image">
        <div className="project-title">Upload Project image</div>

        {selectedImage ? (
          <img src={URL.createObjectURL(selectedImage)} alt="project" />
        ) : (
          <img src={ProjectImage} alt="project" />
        )}
        <p>{formErrors.selectedImage}</p>
        <div className="upload-buttons">
          <button onClick={handleClick} className="cancel-button">
            Upload
          </button>
          <input
            type="file"
            onChange={imageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />

          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
