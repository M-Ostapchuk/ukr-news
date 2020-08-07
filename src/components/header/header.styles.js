import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const signInLinkStyles = css`
  color: white;
  background-color: #5110ed;
  border-radius: 30px;
  width: auto;
  min-width: 100px;
  height: 25px;
  padding: 0;
  line-height: 25px;
  font-size: 12px;

  &:hover {
    opacity: 0.5;
  }
`;

const signOutLinkStyles = css`
  color: white;
  background-color: red;
  border-radius: 30px;
  width: auto;
  min-width: 100px;
  height: 25px;
  padding: 0;
  line-height: 25px;
  font-size: 12px;

  &:hover {
    opacity: 0.5;
  }
`;

const userLinkStyles = css`
  color: white;
  background-color: grey;
  border-radius: 10px;
  width: auto;
  height: 90%;
  padding: 0;
  font-size: 12px;
  display: flex;
  padding: 0 10px;

  &:hover {
    opacity: 0.5;
  }
`;


export const activeStyle = {
  backgroundColor: "#5110ed",
};

export const HeaderSelect = styled.select`
  width: 100px;
  height: 25px;
`;

export const HeaderContainer = styled.div`
  background: rgb(6, 6, 6);
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const getLinkStyles = (props) => {
  if (props.signInLinkStyles) {
    return signInLinkStyles;
  } else if (props.signOutLinkStyles) {
    return signOutLinkStyles
  } else if (props.userLinkStyles) {
    return userLinkStyles
  }
};

export const OptionLink = styled(NavLink)`
  text-decoration: none;
  line-height: 50px;
  height: 100%;
  background-color: rgb(6, 6, 6);
  text-transform: uppercase;
  color: #ffffff;
  // width: auto;
  padding: 0 30px;
  letter-spacing: 0.5px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  border: none;

  &:hover {
    opacity: 0.5;
  }

  ${getLinkStyles}
`;
