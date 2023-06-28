import React, { useEffect, useState } from "react";

import { ModalActive, ModalButtons, ModalContent } from "../../styles/modal";

import { ButtonContained } from "../../styles/components";
import { Link } from "react-router-dom";
import { SuccessIcon } from "./icons/SuccessIcon";
import { ErrorIcon } from "./icons/ErrorIcon";
import { store } from "../../store/configureStore";
import { CloseIcon } from "./icons/CloseIcon";
import { FlexContainerForButtons } from "../../styles/containers";

export const Modal = ({ handleActiveModalState }: any) => {
  const [isSuccessModal, setSuccessModal] = useState(
    store.getState().modal.success
  );

  return (
    <ModalActive>
      {isSuccessModal ? (
        <ModalContent>
          <p>Форма успешно отправлена</p>
          <SuccessIcon />
          <Link style={{ textDecoration: "none" }} to="/">
            <ButtonContained
              id="button-to-main"
              onClick={handleActiveModalState}
            >
              На главную
            </ButtonContained>
          </Link>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalButtons>
            <p>Ошибка</p>
            <CloseIcon />
          </ModalButtons>
          <ErrorIcon />
          <ModalButtons>
            <p> </p>
            <ButtonContained id="button-close" onClick={handleActiveModalState}>
              Закрыть
            </ButtonContained>
          </ModalButtons>
        </ModalContent>
      )}
    </ModalActive>
  );
};
