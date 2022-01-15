import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotateImg = styled.img`
&:hover {
    animation: ${rotate} infinite 20s linear;
}

`;

export default RotateImg;
// export default StyleInput
