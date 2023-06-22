import styled from "styled-components";

export const ModalStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba($color: #000000, $alpha: 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* opacity: 0; */
  pointer-events: none;
  transition: 0.5s;
  z-index: 10;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
