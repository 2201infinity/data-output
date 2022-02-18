import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
      0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const transitions = {
  fadeIn,
};

export default transitions;
