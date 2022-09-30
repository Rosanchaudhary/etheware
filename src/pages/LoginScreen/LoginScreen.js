import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import BottomBar from "../../components/BottomBar/BottomBar";
import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import TextField from "../../components/TextField/TextField";
import "./LoginScreen.css";

const countries = [
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "China", label: "China" },
];
const languages = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "Chinese", label: "Chinese" },
];

const LoginScreen = () => {
  const [selectValue, setSelectValue] = useState("United States");
  const [selectLanguage, setSelectedLangage] = useState("English");
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="containers">
      <div className="top-bar"> 
        <div className="input-container">
          <div className="container-title"> Open an Account</div>
          <DropDownSelector
            label={"Select Country"}
            options={countries}
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
          <DropDownSelector
            label={"Select Language"}
            options={languages}
            selectValue={selectLanguage}
            setSelectValue={setSelectedLangage}
          />
          <TextField
            label={"Full Name"}
            value={fullName}
            setValue={setFullName}
            placeholder={"Full Name"}
          />
          <TextField
            label={"Contact Number"}
            value={contact}
            setValue={setContact}
            placeholder={"(000)-000-000"}
          />
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
          <button className="filled-button">CREATE ACCOUNT</button>
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
          <button className="border-button">SIGN IN</button>
          <div className="tos-message">
            We understand the trust you place in us and our responsibility to
            protect your privacy. To learn about how we will handle your
            privacy, read our privacy policy.
          </div>
          <div className="statement">Etheware privacy statement</div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
};
export default LoginScreen;
