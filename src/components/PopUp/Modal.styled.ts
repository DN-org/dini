import styled from "styled-components";

interface ModalOverlayProps {
  active: boolean;
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -30px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
