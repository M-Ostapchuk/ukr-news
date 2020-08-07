import styled from "styled-components";

export const OverviewContainer = styled.div`
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-column-gap: 10px;
    background-color: #f2f3f5;
    width: 90%;
    margin: 0px auto;
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
`;