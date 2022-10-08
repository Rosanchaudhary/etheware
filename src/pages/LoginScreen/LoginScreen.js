import React, { useEffect, useState } from "react";

import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import TextField from "../../components/TextField/TextField";
import {
  errorMessage,
  loginUserThunk,
  selectStatus,
} from "../../redux/registerSlice";


const LoginScreen = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const firebasError = useSelector(errorMessage);

  const [formErrors, setFormErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      email: email,
      password: password,
    };
    setFormErrors(validate(formValues));

    if (Object.entries(validate(formValues)).length === 0) {
      dispatch(
        loginUserThunk({
          email,
          password,
        })
      );
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
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
          <p>{formErrors.email}</p>
          <TextField
            label={"Password"}
            value={password}
            setValue={setPassword}
            placeholder={"Enter a strong password"}
            icon={<FaExclamationCircle size={10} />}
          />
          <p>{formErrors.password}</p>
          <button className="filled-button" onClick={handleSubmit}>
            SIGN IN
          </button>
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
          <Link to="/register" style={{ width: "100%" }}>
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
