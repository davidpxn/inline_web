import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import AlertUI from '@material-ui/lab/Alert';


function Alert(props) {
  const {
    type,
    text,
  } = props;

  const [open, setOpen] = useState(text ? true : false);

  useEffect(() => {
    setOpen(text ? true : false);
  }, [text]);


  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={() => setOpen(false)}>
      <AlertUI severity={type}>
        {text}
      </AlertUI>
    </Snackbar>
  );
}


export default Alert;
