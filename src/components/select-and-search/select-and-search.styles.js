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

  @media screen and (max-width: 768px) {
    display: flex;
    width: 80%;
    position: relative;
    justify-content: space-between;
    margin-bottom: 100px;
    height: 80px;
    
  }
`;
