import styled from "styled-components";

export const SpinnerOverlay = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fefefe;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid rgba(255,0,0,0.2);
    border-top: rgba(0,102,51,0.5);
    animation: spin 900ms easy-in infinite;
    -webkit-animation: spin 900ms ease-in infinite;

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
`;