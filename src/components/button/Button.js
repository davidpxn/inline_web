import React from 'react';

import './Button.scss';


function Button(props) {
  const {
    text,
    form,
    handleClick,
  } = props;

  
  return (
    <div className="button">
      <button
        className="button__button"
        form={form}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}


export default Button;
