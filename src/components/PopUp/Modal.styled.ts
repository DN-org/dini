import styled from "styled-components";

interface ModalOverlayProps {
  active: boolean;
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  //Позиционирование
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  //Границы
  overflow: hidden;

  //Фон и декор
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  //Позиционирование
  position: relative;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  //Позиционирование
  position: absolute;
  top: -40px;
  right: -30px;

  //Границы
  border: none;

  //Типография
  font-size: 1.5rem;

  //Фон и декор
  background: none;

  //Анимация и трансформация
  cursor: pointer;
`;
