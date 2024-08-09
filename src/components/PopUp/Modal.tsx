//Packages
import React, { ReactNode } from "react";

//Styles
import { CloseButton, ModalContent, ModalOverlay } from "./Modal.styled";

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <ModalOverlay
      active={active}
      onClick={() => setActive(false)}
      role="dialog"
      aria-modal="true"
      aria-hidden={!active}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setActive(false)} aria-label="Закрыть модальное окно">
          &times;
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
{/* 
const [modalActive, setModalActive] = useState(false);
<button onClick={() => setModalActive(true)}>Добавить</button>
<Modal active={modalActive} setActive={setModalActive}>
  <Test />
</Modal> 
*/}
