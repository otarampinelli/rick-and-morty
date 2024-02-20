import styled, { keyframes } from "styled-components";

function Spinner() {
  return (
    <SpinnerBlock>
      <SpinnerWrapper />
    </SpinnerBlock>
  );
}

export default Spinner;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid rgb(32, 35, 41);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 2s linear infinite;
  margin: auto;
`;

const SpinnerBlock = styled.div`
  background: rgb(39, 43, 51);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
