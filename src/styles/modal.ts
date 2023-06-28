import styled from "styled-components";

export const ModalActive = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: 0.5s;
  z-index: 10;
  opacity: 1;
  pointer-events: all;
`;

export const ModalContent = styled.div`
  width: 460px;
  height: 312px;
  padding: 20px;
  gap: 50px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
