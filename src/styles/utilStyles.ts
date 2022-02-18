import { css } from "@emotion/react";

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d4d2cf;
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
`;
