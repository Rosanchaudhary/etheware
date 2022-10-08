import React, { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

import DropDownSelector from "../../components/DropDownSelector/DropDownSelector";
import TextField from "../../components/TextField/TextField";
import "./SignupScreen.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  errorMessage,
  registerUserThunk,
  selectStatus,
} from "../../redux/registerSlice";

import { nextStep } from "../../redux/stepSlice";

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

const SignupScreen = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const firebasError = useSelector(errorMessage);

  const [formErrors, setFormErrors] = useState({});
  const [selectCountry, setSelectCountry] = useState("United States");
  const [selectLanguage, setSelectedLangage] = useState("English");
  const [contact, setContact] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      country: selectCountry,
      language: selectLanguage,
      fullName: fullName,
      contact: contact,
      email: email,
      password: password,
    };
    console.log(validate(formValues));
    setFormErrors(validate(formValues));
    console.log(status);

    if (Object.entries(validate(formValues)).length === 0) {
      dispatch(registerUserThunk(formValues));
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "Username is required!";
    }
    if (!values.contact) {
      errors.contact = "Contact is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (firebasError.length !== 0) {
      setFormErrors({ email: firebasError });
    }
  }, [firebasError]);

  if (status === "failed") {
    console.log(status);
    console.log(firebasError);

  }
  if (status === "loading") {
    return (
      <div className="containers">
        <div className="top-bar">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
  if (status === "succeeded") {
    dispatch(nextStep());
  }

  return (
    <div className="containers">
      <div className="top-bar">
        <div className="input-container">
          <div className="container-title"> Open an Account</div>
          <form onSubmit={handleSubmit}>
            <DropDownSelector
              label={"Select Country"}
              options={countries}
              selectValue={selectCountry}
              setSelectValue={setSelectCountry}
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
            <p className="error-message">{formErrors.fullName}</p>
            <TextField
              label={"Contact Number"}
              value={contact}
              setValue={setContact}
              placeholder={"(000)-000-000"}
            />
            <p className="error-message">{formErrors.contact}</p>
            <TextField
              label={"Email Address"}
              value={email}
              setValue={setEmail}
              placeholder={"appleseed@eathware.com"}
            />
            <p className="error-message">{formErrors.email}</p>
            <TextField
              label={"Password"}
              value={password}
              setValue={setPassword}
              placeholder={"Enter a strong password"}
              icon={<FaExclamationCircle size={10} />}
            />
            <p className="error-message">{formErrors.password}</p>
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
            <Link to="/login" style={{ width: "100%" }}>
              <button className="border-button">SIGN IN</button>
            </Link>
            <div className="tos-message">
              We understand the trust you place in us and our responsibility to
              protect your privacy. To learn about how we will handle your
              privacy, read our privacy policy.
            </div>
            <div className="statement">Etheware privacy statement</div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignupScreen;
