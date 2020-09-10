import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 1050px) {
    width: 280px;
    font-size: 15px;

  }

  @media screen and (max-width: 790px) {
    margin: 20px 0px;
  }
`;
