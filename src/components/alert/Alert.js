import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import AlertUI from '@material-ui/lab/Alert';


function Alert(props) {
  const {
    type,
    text,
    center, // By default, the alert box will be in the bottom right
    open,
    onClose,
  } = props;


  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={center ? { vertical: 'bottom', horizontal: 'center' } : { vertical: 'bottom', horizontal: 'right' }}
      onClose={onClose}>
      <AlertUI severity={type}>
        {text}
      </AlertUI>
    </Snackbar>
  );
}


export default Alert;
