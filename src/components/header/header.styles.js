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
  background-color: #5110ed;
  border-radius: 30px;
  width: auto;
  min-width: 100px;
  height: 25px;
  padding: 0 5px;
  line-height: 25px;
  font-size: 12px;

  &:hover {
    opacity: 0.5;
  }
`;

export const activeStyle = {
  backgroundColor: "#5110ed",
};

export const HeaderContainer = styled.div`
  background: rgb(6, 6, 6);
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 10;
  position: relative;

  &:hover {
    opacity: 1;
  }
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  opacity: ${(props) => (props.fixed ? "0.5" : "1")};
`;

const getLinkStyles = (props) => {
  if (props.signinlinkstyles) {
    return signInLinkStyles;
  } else if (props.signoutlinkstyles) {
    return signOutLinkStyles;
  } else if (props.userlinkstyles) {
    return userLinkStyles;
  }
};

export const OptionLink = styled(NavLink)`
  text-decoration: none;
  line-height: 50px;
  height: 100%;
  background-color: rgb(6, 6, 6);
  text-transform: uppercase;
  color: #ffffff;
  padding: 0 10px;
  letter-spacing: 0.5px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  border: none;
  font-size: 15px;

  @media screen and (max-width: 868px) {
    font-size: 10px;
    padding: 0px;
  }

  &:hover {
    opacity: 0.5;
  }

  ${getLinkStyles}
`;
