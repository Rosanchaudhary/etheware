import React from "react";
import "./Congratulations.css";

const Congratulations = () => {
  return (
    <div className="container">
      <div className="welcome-container">
        <div className="internal-welcome-container">
          <div className="title-text">
            Welcome to <span>Kindered</span> v.1
          </div>
          <div className="subtitle-text">
            So what should you do now? <span>Sit Back and Relax</span>
          </div>
          <div className="row">
            <div className="option-box">
              <div className="top-text">Add Features</div>
              <div className="description">
                Contact your team lead with information about the features and
                changes you want to made.
              </div>
            </div>
            <div className="option-box">
              <div className="top-text">View the Kindered Figma</div>
              <div className="description">
                Watch your new application be build from scratch in real time.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="option-box">
              <div className="top-text">Examples</div>
              <div className="description">
                Discover and find examples of Etheware applications for your
                next project
              </div>
            </div>
            <div className="option-box">
              <div className="top-text">Boss Mode</div>
              <div className="description">
              Choose your preferred settings and let us know your throughouts.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upper-column">
        <div className="first-row">
          <strong>Congratulations!</strong>
          <p>You just deployed a new project in vercel.</p>
        </div>
        <div className="second-row">
          <button>Go to Dashboard</button>
        </div>
      </div>
      <div className="bottom-column">
        <div className="first-row">Hello</div>
        <div className="second-row">
          <div className="options">
            <div className="badge">DEVELOP</div>
            Run next to run your project sucessfully.
          </div>
          <div
            style={{
              width: "100%",
              borderBottom: " 1px solid #1e1e1f",
              marginBottom: "30px",
            }}
          ></div>
          <div className="options">
            <div className="badge">PREVIEW</div>
            Push to any git branch other than main to review changes.
          </div>
          <div
            style={{
              width: "100%",
              borderBottom: " 1px solid #1e1e1f",
              marginBottom: "30px",
            }}
          ></div>
          <div className="options">
            <div className="badge">SHIP</div>
            Push to main to ship changes in production.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
