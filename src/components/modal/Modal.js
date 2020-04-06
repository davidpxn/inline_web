import React from 'react';
import ModalUI from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import './Modal.scss';


function Modal(props) {
  const {
    open,
    onClose,
  } = props;


  return (
    <ModalUI
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={open}>
        <div className="modal">
          {props.children}
        </div>
      </Fade>
    </ModalUI>
  );
}


export default Modal;
