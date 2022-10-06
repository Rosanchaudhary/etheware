import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField/TextField";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="containers">
      <div className="top-bar">
        <div className="input-container">
          <div className="container-title"> Login</div>

          <TextField
            label={"Email Address"}
            value={email}
            setValue={setEmail}
            placeholder={"appleseed@eathware.com"}
          />
          <TextField
            label={"Password"}
            value={password}
            setValue={setPassword}
            placeholder={"Enter a strong password"}
            icon={<FaExclamationCircle size={10} />}
          />
          <button className="filled-button">SIGN IN</button>
          <div
            style={{
              width: "100%",
              height: " 20px",
              borderBottom: " 1px solid black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                backgroundColor: "white",
                padding: "0 10px",
              }}
            >
              OR
            </span>
          </div>
          <Link to="/register" style={{width:"100%"}}>
            <button className="border-button">CREATE ACCOUNT</button>
          </Link>

          <div className="tos-message">
            We understand the trust you place in us and our responsibility to
            protect your privacy. To learn about how we will handle your
            privacy, read our privacy policy.
          </div>
          <div className="statement">Etheware privacy statement</div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
