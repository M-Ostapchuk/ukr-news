import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const activeStyle = {
  "backgroundColor": "red"
}

export const HeaderSelect = styled.select`
  width: 100px;
  height: 25px;
`;

export const HeaderContainer = styled.div`
  background: rgb(6, 6, 6);
  grid-row-start: 1;
  grid-row-end: 2;
  height: 50px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  line-height: 50px;
  height: 100%;
  background-color: rgb(6, 6, 6);
  text-transform: uppercase;
  color: #ffffff;
  padding: 0px 10px;

  &:hover {
    background-color: red;
  }
  &:active {
    background-color: red;

  }

  background: ${props => props.active? "red": "rgb(6, 6, 6)"};

`;

