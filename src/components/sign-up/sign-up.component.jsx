import React, { useState } from "react";

// Components
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

// Styles
import "./sign-up.styles.scss";
import { SignUpContainer } from "./sign-up.styles.js";

// Router

// Redux
import { connect } from "react-redux";

// Select

// Firebase

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    displayName: "",
    confirmPassword: "",
  });

  const { email, password, displayName, confirmPassword } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
    setUserCredentials({
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
      <h2 className="title">I dont have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display name"
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm password"
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
