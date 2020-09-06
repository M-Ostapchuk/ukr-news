import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 20%;
  height: 80px;
  background: rgb(6, 6, 6);
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 100;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  display: ${(props) => (props.visible ? "flex" : "none")};
`;
