import React, { useState } from "react";

// Components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// Styles
import "./sign-in.styles.scss";
import { SignInContainer } from "./sign-in.styles.js";

// Router

// Redux
import { connect } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

// Select

// Firebase

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
    setCredentials({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="email"
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          handleChange={handleChange}
          label="password"
          type="password"
          name="password"
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={() => {
              googleSignInStart();
            }}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
