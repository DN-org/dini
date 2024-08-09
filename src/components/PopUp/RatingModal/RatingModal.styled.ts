import styled from "styled-components";

import { ModalContent } from "../Modal.styled";

export const RatingModalContainer = styled("div")(() => ({
  //Позиционирование
  position: "relative",
  zIndex: "10",
  //Размеры
  width: "400px",
  height: "400px",
  //Фон и декор
  backgroundColor: "rgba(0,0,0,.7)",
}));
