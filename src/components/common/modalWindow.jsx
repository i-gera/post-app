import React from "react";
import Modal from "react-modal";
import style from "./ModalWindow.module.css";

Modal.setAppElement("#root");

const ModalWindow = (props) => {
  const modalIsOk = () => {
    props.setModalIsOk(true);
    props.setModalIsOpen(false);
  };
  return (
    <div>
      <Modal isOpen={props.modalIsOpen}>
        <h3>{props.modalText}</h3>
        <div className={style.btns}>
          <button onClick={modalIsOk}>OK</button>
          <button
            onClick={() => {
              props.setModalIsOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
