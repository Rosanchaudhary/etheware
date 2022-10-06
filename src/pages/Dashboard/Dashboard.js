import React from "react";
import "./Dashboard.css";
import Etheware from "../../assets/etheware_big.png";
import Ethechat from "../../assets/ethechat.png";
import Pinnacle from "../../assets/pinnacle.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="title-text">Dashboard</div>
      <div className="row">
        <div className="column">
          <img src={Etheware} alt="etheware" />
          <span>Etheware 1.1</span>
          <span>Status: active</span>
        </div>
        <div className="column">
          <img src={Ethechat} alt="etheware" />
          <span>Ethechat 1.1</span>
          <span>Status: active</span>
        </div>
        <div className="column">
          <img src={Pinnacle} alt="etheware" />
          <span>Pinnacle 1.1</span>
          <span>Status: active</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
