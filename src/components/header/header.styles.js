import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const signInLinkStyles = css`
  color: white;
  background-color: #5110ed;
  border-radius: 30px;
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

export const HeaderWrapper = styled.div`
  background: rgb(6, 6, 6);
  height: 50px;
  width: 100%;
  position: relative;

`;

export const HeaderContainer = styled.div`
  background: rgb(6, 6, 6);
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 10;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    position: fixed;
    overflow: scroll;
    

    top: ${(props) => (props.show ? "0px" : "-800px")};
  }

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

  @media screen and (max-width: 920px) {
    font-size: 10px;
    padding: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  &:hover {
    opacity: 0.5;
  }

  ${getLinkStyles}
`;

export const ShevronIconContainer = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BarsIconContainer = styled.div`
  display: none;
  position: absolute;
  left: 20px;
  top: 10px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
