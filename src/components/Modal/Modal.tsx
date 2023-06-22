import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { ModalStyled } from "../../styles/modal";

export const Modal = ({ modal, setModal, children }: any) => {
  // useEffect(() => {
  //   const x = window.scrollX;
  //   const y = window.scrollY;
  //   modal.active
  //     ? (window.onscroll = function () {
  //         window.scrollTo(x, y);
  //       })
  //     : (window.onscroll = function () {});
  // }, [modal]);
  return (
    <ModalStyled
      className={
        modal.active ? `${styles.modal} ${styles.active} ` : `${styles.modal}`
      }
      onClick={() => {
        setModal({ active: false, content: children });
      }}
    >
      <div className={styles.modal__content}>{children}</div>
    </ModalStyled>
  );
};
