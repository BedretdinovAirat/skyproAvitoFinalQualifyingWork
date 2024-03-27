import React, { useRef } from "react";
import styles from "./modalLayout.module.css";
import { useNavigate } from "react-router-dom";

const ModalLayout = ({ children }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const onClick = (event) => {
    if (!ref.current.contains(event.target)) {
      navigate(-1);
    }
  };
  return (
    <div onClick={onClick} className={styles.modalContainer}>
      <div className={styles.containerBg}>
        <div className={styles.modalBlock}>
          <div ref={ref} className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Новое объявление</h3>
            <div className={styles.modalBtnClose}>
              <div className={styles.modalBtnCloseLine}></div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
