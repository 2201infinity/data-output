import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import transitions from "../styles/transitions";

interface IModalInnerStyled {
  width: number;
  height: number;
  isModal: boolean;
}

interface ModalTemplateProps extends IModalInnerStyled {
  children: React.ReactNode;
  onToggleModal: () => void;
}

function ModalTemplate({
  width,
  height,
  isModal,
  children,
  onToggleModal,
  ...rest
}: ModalTemplateProps): ReactElement {
  return (
    <ModalTemplateBlock onMouseDown={onToggleModal} {...rest}>
      <ModalInner
        width={width}
        height={height}
        isModal={isModal}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </ModalInner>
      <ModalBackground />
    </ModalTemplateBlock>
  );
}

const ModalTemplateBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ModalInner = styled.div<IModalInnerStyled>`
  position: absolute;
  z-index: 9999;
  background-color: white;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  overflow: auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 12px;
  padding: 20px;
  animation: ${transitions.fadeIn} 0.4s ease-in-out;
`;

const ModalBackground = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.4;
`;

export default ModalTemplate;
