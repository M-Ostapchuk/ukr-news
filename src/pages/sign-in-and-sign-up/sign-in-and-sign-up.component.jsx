import React from "react";
// Styles
import { StyledDiv } from "./sign-in-and-sign-up.styles";
// Components
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";



const SignInAndSignUp = () => {
  return (
    <StyledDiv>
      <SignIn />
      <SignUp />
    </StyledDiv>
  );
};

export default SignInAndSignUp;
