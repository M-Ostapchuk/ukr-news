import styled from "styled-components";

export const OverviewContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  background-color: #f2f3f5;
  width: 90%;
  margin: 20px auto;

  @media screen and (max-width: 868px) {
    width: 98%;
  }
`;

export const OverviewWrapper = styled.div`
  display: grid;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background-color: #f2f3f5;

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;
