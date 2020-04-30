import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss';

let timeout;


function Modal(props) {
  const {
    title,
    open,
    onClose,
    autoHideDuration,
    parentID,
  } = props;


  function handleClose() {
    clearTimeout(timeout);
    onClose();
  }


  return (
    <ReactModal
      isOpen={open}
      onRequestClose={handleClose}
      onAfterOpen={() => timeout = setTimeout(() => handleClose(), autoHideDuration)}
      contentLabel={title}
      parentSelector={() => document.querySelector(`#${parentID}`)}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal__overlay"
    >
      {props.children}
    </ReactModal>
  );
}


ReactModal.setAppElement('#root');
export default Modal;
