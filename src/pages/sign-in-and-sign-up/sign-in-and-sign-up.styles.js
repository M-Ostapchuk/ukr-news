import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  margin: 0px auto;
  box-sizing: border-box;

  @media screen and (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
  }
`;
